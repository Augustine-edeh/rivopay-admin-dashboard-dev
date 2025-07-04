"use client";

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
import clsx from "clsx";
import { CircleAlert } from "lucide-react";
import Link from "next/link";

// Schema
const formSchema = z.object({
  email: z.string().email({
    message: "This email field is required",
  }),
});

const ResetPasswordPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
    router.push("/auth/reset-password"); //3.
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
              Forgot password?
            </h1>
            <p className="text-center">
              Input your email and we will send your reset password link.
            </p>
          </div>

          <div>
            {/* Password Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-[12px]">
                  <FormLabel htmlFor="email" className="text-separatorGray">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Minimum 8 characters"
                        className="pr-10 rounded-3xl p-6" // add padding to avoid icon overlap
                        {...field}
                      />
                      <span
                        aria-label={
                          fakebackendResponse && "email field is required"
                        }
                        role="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
                      >
                        {fakebackendResponse && (
                          <CircleAlert size={18} color="red" />
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
              <p className="text-muted-foreground text-sm flex">
                This email field is required
              </p>
            </div>

            {/* Log in Button */}
            <Button
              type="submit"
              className="w-full bg-primary p-6 mt-8 mb-5 rounded-3xl"
              disabled={!form.formState.isValid}
            >
              Send
            </Button>

            <p className="text-center">
              Remember your account?{" "}
              <Link
                href="/auth/login"
                className="text-textPurple hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;
