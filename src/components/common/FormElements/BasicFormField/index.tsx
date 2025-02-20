import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface BasicFormFieldProps {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  type?: string;
  className?: string;
  disabled?: boolean;
}

export default function BasicFormField({
  name,
  placeholder = "",
  label,
  required = false,
  type = "text",
  className = "",
  disabled = false,
}: BasicFormFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && (
            <FormLabel>
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={className}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
