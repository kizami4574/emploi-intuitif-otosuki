import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { JobBasicInfo } from "@/components/forms/JobBasicInfo";
import { JobLanguages } from "@/components/forms/JobLanguages";
import { JobDetails } from "@/components/forms/JobDetails";
import { JobSalary } from "@/components/forms/JobSalary";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  const navigate = useNavigate();
  
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
    toast({
      title: "Offre créée avec succès",
      description: "L'offre d'emploi a été enregistrée",
    });
    navigate("/admin/jobs");
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Créer une offre d'emploi</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <JobBasicInfo form={form} />
            <JobLanguages form={form} />
            <JobDetails form={form} />
            <JobSalary form={form} />

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