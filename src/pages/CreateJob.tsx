import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  contractType: z.enum(["CDI", "CDD", "Stage", "Freelance"]),
  location: z.string().min(1, "La localisation est requise"),
  languages: z.object({
    french: z.boolean(),
    english: z.boolean(),
    wolof: z.boolean(),
  }),
  description: z.string().min(1, "La description est requise"),
  skills: z.string().min(1, "Les compétences sont requises"),
  experience: z.string().min(1, "L'expérience requise est requise"),
  diploma: z.string().min(1, "Le diplôme requis est requis"),
  salaryType: z.enum(["fixed", "negotiable"]),
  salaryMin: z.string().optional(),
  salaryMax: z.string().optional(),
});

const CreateJob = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      languages: {
        french: false,
        english: false,
        wolof: false,
      },
      salaryType: "fixed",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Créer une offre d'emploi</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

            <div className="space-y-4">
              <FormLabel>Langues requises</FormLabel>
              {["french", "english", "wolof"].map((lang) => (
                <FormField
                  key={lang}
                  control={form.control}
                  name={`languages.${lang}` as any}
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

            <Button type="submit" className="w-full">
              Enregistrer l'offre
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateJob;