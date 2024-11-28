import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface JobDetailsProps {
  form: UseFormReturn<any>;
}

export const JobDetails = ({ form }: JobDetailsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description du poste</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Décrivez les responsabilités et le contexte du poste"
                className="min-h-[150px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="skills"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Compétences requises</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Listez les compétences techniques et soft skills requises"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Années d'expérience</FormLabel>
            <FormControl>
              <Input placeholder="Ex: 3-5 ans" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="diploma"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Diplôme requis</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Bac+5 en Immobilier" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};