import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const AddNewDriverButtonDialog = () => {
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
          <DialogTitle>Add New Driver</DialogTitle>
          <DialogDescription>
            {`Fill in the driver's basic details below.`}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Example fields */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              placeholder="Driver's Name"
              className="col-span-3 px-2 py-1 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="route" className="text-right">
              Route
            </label>
            <input
              id="route"
              placeholder="Driver's Route"
              className="col-span-3 px-2 py-1 border rounded-md"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewDriverButtonDialog;
