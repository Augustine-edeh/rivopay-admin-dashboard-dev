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
// import clsx from "clsx";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Schema
const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(32, { message: "Password must be at most 32 characters." }),
});

const LoginWelcome = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    // 3. form.reset();
    router.push("/admin"); //4.
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
            <p className="text-center">
              Your command center is ready. Let’s keep the system running
              smoothly!
            </p>
          </div>

          <div>
            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-[12px]">
                  <FormLabel htmlFor="password" className="text-separatorGray">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Minimum 8 characters"
                        className="pr-10 rounded-3xl p-6" // add padding to avoid icon overlap
                        {...field}
                      />
                      <span
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        role="button"
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
            <div className="flex items-center gap-3 mt-2.5">
              <Checkbox id="rememberLogin" className="size-5" />
              <Label
                htmlFor="rememberLogin"
                className="text-muted-foreground text-sm flex"
              >
                Keep me logged in
              </Label>
            </div>

            {/* Log in Button */}
            <Button
              type="submit"
              className="w-full bg-primary p-6 mt-8 mb-5 rounded-3xl"
              disabled={!form.formState.isValid}
            >
              Log in
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginWelcome;
