import { Button } from "@/components/ui/button";

const DriverPagination = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <Button
            key={num}
            variant={num === 1 ? "default" : "outline"}
            size="sm"
            className="w-8 h-8 p-0"
          >
            {num}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DriverPagination;
