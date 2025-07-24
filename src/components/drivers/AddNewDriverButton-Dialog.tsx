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
import { useState } from "react";
// import { Label } from "@/components/ui/label";

type FormValues = {
  fullName: string;
  phone: string;
  terminal: string;
  route: string;
  busNumber: string;
  image: File | null;
};

const AddNewDriverButtonDialog = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      terminal: "",
      route: "",
      busNumber: "",
      image: null,
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      form.setValue("image", file);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Driver:", data);
    // NOTE: optionally reset form or close modal
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

          <div className="flex justify-center items-center relative mt-2">
            <label
              htmlFor="driver-photo"
              className="cursor-pointer group relative rounded-full inline-block"
            >
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Driver avatar"
                  width={90}
                  height={90}
                  className="rounded-full object-cover mx-auto"
                />
              ) : (
                <Image
                  src="/icons/driverImg-fallback.svg"
                  alt="Upload Driver"
                  width={90}
                  height={90}
                  className="rounded-full mx-auto"
                />
              )}
              <span className="absolute inset-0 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </label>

            <Input
              id="driver-photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* <span className="absolute cursor-pointer inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Pencil className="text-white w-4 h-4" />
          </span> */}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-[14px] mt-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        className="w-full rounded-[6px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Mobile Number"
                        className="w-full rounded-[6px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bus Number */}
              <FormField
                control={form.control}
                name="busNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Bus Number"
                        className="w-full rounded-[6px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terminal */}
              <FormField
                control={form.control}
                name="terminal"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full rounded-[6px]">
                          <SelectValue placeholder="Select Bus Terminal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Terminal 1">Terminal 1</SelectItem>
                          <SelectItem value="Terminal 2">Terminal 2</SelectItem>
                          <SelectItem value="Terminal 3">Terminal 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Route */}
              <FormField
                control={form.control}
                name="route"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full rounded-[6px]">
                          <SelectValue placeholder="Select Route" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Ilawe">Ilawe</SelectItem>
                          <SelectItem value="Iworoko">Iworoko</SelectItem>
                          <SelectItem value="Opopogboro">Opopogboro</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Save button spaced 37px below */}
            <DialogFooter className="mt-[37px]">
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
