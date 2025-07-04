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
import clsx from "clsx";

// Schema
const formSchema = z.object({
  email: z.string().email({
    // message: "Please enter a valid email address.",
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

  const [fakebackendResponse, setfakebackendResponse] =
    useState<boolean>(false);

  // 2. Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    // NOTE: post form values to the backend.

    // NOTE: if response.data.error (i.e, wrong credentials); show toast
    setfakebackendResponse(true); // 1.
    // 2. show toast({type: error, message: {heading: 'Invalid email or password}', subText: 'Please try again.' })

    // NOTE: if response.data.success; redirect to admin page
    // 1. show toast({type: success, message: {heading: 'Login successfully}', subText: 'You are logged in.' })
    // 2. clear the form & redirect to /admin.
    router.push("/admin"); //3.
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Welcome Back
      </h1>
      <p>Enter your details to login as an admin</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-full mt-16"
        >
          <div className="space-y-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your official email address"
                      className={clsx(
                        fakebackendResponse ? "border-error-300" : ""
                      )}
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
                <FormItem>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        className={clsx(
                          "pr-10 bo rder border-b lue-500 outline outline-blue-500", // add padding to avoid eye-icon overlap
                          fakebackendResponse ? "border-error-300" : ""
                        )}
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
          </div>

          <div className="w-fit ml-auto mt-4">
            <Link href="/reset-password" className="text-primary">
              Forgort password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary mt-16"
            disabled={!form.formState.isValid}
          >
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
