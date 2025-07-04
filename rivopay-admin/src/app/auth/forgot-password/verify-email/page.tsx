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
import Image from "next/image";

// Schema
const formSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "OTP must be exactly 6 digits." })
    .regex(/^\d+$/, { message: "OTP must be numeric." }),
});

const VerifyEmail = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
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
    router.push("/auth/forgot-password/verify-email"); //3.
  }

  return (
    <div className="flex justify-between w-full p-5 px-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-16 w-full lg:max-w-md lg:w-1/2 h-full mb-32"
        >
          <div className="space-y-2.5">
            <h1 className="text-2xl font-semibold tracking-tight">
              Admin Verification
            </h1>
            <p className="text-center">
              A one time OTP has been sent to your email address, please enter
              the OTP in the bottom.
            </p>
          </div>

          <div>
            {/* OTP Field */}
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="space-y-[12px]">
                  <FormLabel htmlFor="email" className="text-separatorGray">
                    Enter OTP here
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="email"
                        type="text"
                        inputMode="numeric"
                        placeholder="6 digit OTP"
                        className="rounded-3xl p-6 text-center"
                        maxLength={6}
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bottomline note */}
            <p className="text-muted-foreground text-sm flex mt-2.5">
              This field is required
            </p>

            {/* Log in Button */}
            <Button
              type="submit"
              className="w-full bg-primary p-6 mt-8 mb-5 rounded-3xl"
              disabled={!form.formState.isValid}
            >
              Enter
            </Button>
          </div>
        </form>
      </Form>

      <div className="relative hidden lg:block w-1/2">
        <Image
          src="/lockPad.png"
          width={230}
          height={230}
          alt="secure-image"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default VerifyEmail;
