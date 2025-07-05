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
// import { useRouter } from "next/navigation";

// NOTE: add standard validation for all forms and users KYC inputs
// NOTE: correct spelling is RIVO !== REVO

// Schema
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(32, { message: "Password must be at most 32 characters." }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(32, { message: "Password must be at most 32 characters." }),
});

const ResetPasswordPage = () => {
  // const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Defining a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // I think I could also typically clear the form  here & redirect the user.
    console.log(values);

    // router.push("/auth/verify-email");
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full h-full"
        >
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-center">
              Reset Password
            </h1>
            <p className=" text-center">
              Input your email to reset your password
            </p>
          </div>

          <div className="space-y-5">
            {/* Email Field*/}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-[12px]">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="rounded-3xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-muted-foreground text-sm mt- 2.5">
              The email field is required
            </p>

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
                        className="pr-10 rounded-3xl" // add padding to avoid icon overlap
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

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-[12px]">
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Minimum 8 characters"
                        className="pr-10 rounded-3xl" // add padding to avoid icon overlap
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

            {/* Create Account Button */}
            <Button
              type="submit"
              className="w-full bg-primary rounded-3xl mt-4"
              disabled={!form.formState.isValid}
            >
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;
