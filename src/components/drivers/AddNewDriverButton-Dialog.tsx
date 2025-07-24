"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  phone: string;
  terminal: string;
  route: string;
};

const AddNewDriverButtonDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      terminal: "",
      route: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Driver:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-[#00AB5712] hover:bg-[#00AB57] text-[#00AB57] hover:text-[#daf9cffc] rounded-full border-none"
        >
          Add New Driver <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Add New Driver</DialogTitle>
          <Image
            src="/icons/driverImg-fallback.svg"
            alt="driver-avatar"
            width={90}
            height={90}
            className="mx-auto"
          />
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter full name"
                      className="rounded-[6px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+234 810 000 0000"
                      className="rounded-[6px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terminal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bus Terminal</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-[6px]">
                        <SelectValue placeholder="Select terminal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Terminal 1">Terminal 1</SelectItem>
                      <SelectItem value="Terminal 2">Terminal 2</SelectItem>
                      <SelectItem value="Terminal 3">Terminal 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="route"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Route</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-[6px]">
                        <SelectValue placeholder="Select route" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Ilawe">Ilawe</SelectItem>
                      <SelectItem value="Iworoko">Iworoko</SelectItem>
                      <SelectItem value="Opopogboro">Opopogboro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="bg-textPurple/85 hover:bg-textPurple py-2 w-full rounded-full"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewDriverButtonDialog;
