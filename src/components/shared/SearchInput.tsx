import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const SearchInput = ({
  className,
  containerClassName,
  id = "search",
  placeholder = "Search",
  ...props
}: SearchInputProps) => {
  return (
    <div
      className={clsx(
        "relative hidden md:flex items-center w-full max-w-xs",
        containerClassName
      )}
    >
      <Input
        id={id}
        placeholder={placeholder}
        className={clsx(
          "rounded-[45px] pl-14 bg-[#B3B3B35C] hover:bg-dashboardCardGray",
          className
        )}
        {...props}
      />
      <Label htmlFor={id} className="absolute left-3.5 rounded-full">
        <Search className="text-separatorGray" />
      </Label>
    </div>
  );
};

export default SearchInput;
