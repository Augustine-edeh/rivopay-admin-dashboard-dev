"use client";

import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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

// Schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(32, { message: "Password must be at most 32 characters." }),
});

const SignupForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
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
              Create an Account
            </h1>

            <Button className="w-full flex gap-2 bg-lightGray text-darkGray hover:text-white py-4 mt-5 rounded-3xl">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.92 9.1875C16.92 8.6025 16.8675 8.04 16.77 7.5H9V10.6913H13.44C13.2488 11.7225 12.6675 12.5963 11.7938 13.1813V15.2512H14.46C16.02 13.815 16.92 11.7 16.92 9.1875Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.00043 17.2499C11.2279 17.2499 13.0954 16.5111 14.4604 15.2511L11.7942 13.1811C11.0554 13.6761 10.1104 13.9686 9.00043 13.9686C6.85168 13.9686 5.03293 12.5174 4.38418 10.5674H1.62793V12.7049C2.98543 15.4011 5.77543 17.2499 9.00043 17.2499Z"
                  fill="#34A853"
                />
                <path
                  d="M4.38375 10.5674C4.21875 10.0724 4.125 9.54367 4.125 8.99992C4.125 8.45617 4.21875 7.92742 4.38375 7.43242V5.29492H1.6275C1.05 6.44457 0.749491 7.71338 0.750001 8.99992C0.750001 10.3312 1.06875 11.5912 1.6275 12.7049L4.38375 10.5674Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.00043 4.03125C10.2117 4.03125 11.2992 4.4475 12.1542 5.265L14.5204 2.89875C13.0917 1.5675 11.2242 0.75 9.00043 0.75C5.77543 0.75 2.98543 2.59875 1.62793 5.295L4.38418 7.4325C5.03293 5.4825 6.85168 4.03125 9.00043 4.03125Z"
                  fill="#EA4335"
                />
              </svg>

              <span>Sign Up Google</span>
            </Button>

            <div className="flex items-center gap-4 mt-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground text-sm">or</span>
              <Separator className="flex-1" />
            </div>
          </div>

          <div className="space-y-5">
            {/* First & Last Names Field */}
            <div className="flex gap-8">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-[12px]">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className="rounded-3xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-[12px]">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        className="rounded-3xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

            {/* T&C checkbox Field */}
            <div className="flex items-center gap-3">
              <Checkbox id="terms" className="size-5" />
              <Label
                htmlFor="terms"
                className="text-muted-foreground text-sm flex"
              >
                <p>
                  By creating an account, you agree to our
                  <span className="font-semibold text-[#553A6B]">
                    Terms and Conditions
                  </span>{" "}
                  and Privacy Policy.
                </p>
              </Label>
            </div>

            {/* Create Account Button */}
            <Button
              type="submit"
              className="w-full bg-primary rounded-3xl mt-4"
              disabled={!form.formState.isValid}
            >
              Create Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
