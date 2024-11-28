import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface JobSalaryProps {
  form: UseFormReturn<any>;
}

export const JobSalary = ({ form }: JobSalaryProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="salaryType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de salaire</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="fixed" />
                  </FormControl>
                  <FormLabel className="font-normal">Fourchette fixe</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="negotiable" />
                  </FormControl>
                  <FormLabel className="font-normal">Négociable</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {form.watch("salaryType") === "fixed" && (
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="salaryMin"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Salaire minimum</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 2500000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salaryMax"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Salaire maximum</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 3500000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </>
  );
};