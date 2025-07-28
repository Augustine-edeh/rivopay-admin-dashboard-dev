"use client";

import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

// import clsx from "clsx";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Schema
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string({}),
});

const LoginPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const [fakebackendResponse, setfakebackendResponse] =
  //   useState<boolean>(false);

  // 2. Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    // NOTE: post form values to the backend.

    // NOTE: if response.data.error (i.e, wrong credentials); show toast
    // setfakebackendResponse(true); // 1.
    // 2. show toast({type: error, message: {heading: 'Invalid email or password}', subText: 'Please try again.' })

    // NOTE: if response.data.success; redirect to admin page
    // 1. show toast({type: success, message: {heading: 'Login successfully}', subText: 'You are logged in.' })
    // 2. clear the form & redirect to /admin.
    router.push("/admin"); //3.
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-16 w-full h-full"
        >
          <div className="space-y-2.5">
            <h1 className="text-2xl font-semibold tracking-tight text-center">
              Sign in with your email
            </h1>

            <p>Enter your email address and password to sign in</p>
          </div>

          <div>
            {/* Email Field*/}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-[12px] mb-5">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="rounded-3xl lg:p-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-[12px]">
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Minimum 8 characters"
                        className="pr-10 rounded-3xl lg:p-6" // add padding to avoid icon overlap
                        {...field}
                      />
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </span>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember login checkbox Field */}
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-1">
                <Checkbox id="rememberMeLoggedin" className="size-5" />
                <Label
                  htmlFor="rememberMeLoggedin"
                  className="text-muted-foreground text-sm flex"
                >
                  Keep me logged in
                </Label>
              </div>

              <Link
                href="/auth/forgot-password"
                className="text-textPurple block w-fit hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>

            {/* Log in Button */}
            <Button
              type="submit"
              className="w-full bg-primary rounded-3xl mt-10 mb-5"
              disabled={!form.formState.isValid}
            >
              Log in
            </Button>

            <Link
              href="/auth/sign-up"
              className="text-textPurple block w-fit mx-auto hover:underline mb-2 text-sm"
            >
              Don’t have an account? Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
