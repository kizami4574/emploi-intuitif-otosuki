import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";

interface JobBasicInfoProps {
  form: UseFormReturn<any>;
}

export const JobBasicInfo = ({ form }: JobBasicInfoProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Titre du poste</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Agent Immobilier Senior" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="contractType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de contrat</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-4"
              >
                {["CDI", "CDD", "Stage", "Freelance"].map((type) => (
                  <FormItem key={type} className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value={type} />
                    </FormControl>
                    <FormLabel className="font-normal">{type}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Localisation</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Dakar, Sénégal" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};