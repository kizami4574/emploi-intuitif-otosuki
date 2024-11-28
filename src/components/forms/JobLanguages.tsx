import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";

interface JobLanguagesProps {
  form: UseFormReturn<any>;
}

export const JobLanguages = ({ form }: JobLanguagesProps) => {
  return (
    <div className="space-y-4">
      <FormLabel>Langues requises</FormLabel>
      {["french", "english", "wolof"].map((lang) => (
        <FormField
          key={lang}
          control={form.control}
          name={`languages.${lang}`}
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="font-normal">
                {lang === "french" ? "Français" : lang === "english" ? "Anglais" : "Wolof"}
              </FormLabel>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};