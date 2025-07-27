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
  fullNames: string;
  gender: string;
  cardNumber: string;
  phoneNumber: string;
  metaID: string;
  expDate: string;
};

const AddNewCardDialog = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      fullNames: "",
      gender: "",
      cardNumber: "",
      phoneNumber: "",
      metaID: "",
      expDate: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Driver:", data);
    // NOTE: optionally reset form or close modal
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="grid place-items-center size-12 rounded-xl border-2 border-dashed border-[#D9D9D9] bg-transparent hover:bg-gray-200/80 cursor-pointer">
          <Plus className="text-muted-foreground" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-80">
        <DialogHeader>
          <DialogTitle className="sr-only">Add New Card</DialogTitle>
          <DialogTitle className="">New Card</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-3.5 mt-4">
              {/* Full Names */}
              <FormField
                control={form.control}
                name="fullNames"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Full Names</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="w-full rounded-[3px]"
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
                name="cardNumber"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="w-full rounded-[3px]"
                        // type="number"
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="w-full rounded-[3px]"
                        // type="number"
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
                name="metaID"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Meta ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        className="w-full rounded-[3px]"
                        // type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Route */}
              <FormField
                control={form.control}
                name="expDate"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Exp. Date</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="DD/MM/YYYY"
                        className="w-full rounded-[3px]"
                        {...field}
                      />
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
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCardDialog;
