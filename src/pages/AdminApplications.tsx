import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Application {
  id: number;
  candidateName: string;
  jobTitle: string;
  applicationDate: string;
  status: "pending" | "accepted" | "rejected";
  cv: string;
  coverLetter: string;
  experience: string;
  contact: {
    phone: string;
    email: string;
  };
  gender: string;
}

const AdminApplications = () => {
  const [applications] = useState<Application[]>([
    {
      id: 1,
      candidateName: "John Doe",
      jobTitle: "Agent Immobilier Senior",
      applicationDate: "2024-02-28",
      status: "pending",
      cv: "/path/to/cv.pdf",
      coverLetter: "/path/to/cover-letter.pdf",
      experience: "5 ans d'expérience en immobilier",
      contact: {
        phone: "+221 77 123 45 67",
        email: "john.doe@example.com",
      },
      gender: "Homme",
    },
  ]);

  const [selectedApplication, setSelectedApplication] = useState<Application | null>(
    null
  );

  const handleStatusChange = (status: string, applicationId: number) => {
    console.log(`Status changed to ${status} for application ${applicationId}`);
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Gestion des candidatures</h1>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidat</TableHead>
                <TableHead>Poste</TableHead>
                <TableHead>Date de candidature</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.candidateName}</TableCell>
                  <TableCell>{application.jobTitle}</TableCell>
                  <TableCell>{application.applicationDate}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={application.status}
                      onValueChange={(value) =>
                        handleStatusChange(value, application.id)
                      }
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">En cours d'examen</SelectItem>
                        <SelectItem value="accepted">Accepté</SelectItem>
                        <SelectItem value="rejected">Refusé</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <a href={application.cv} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Dialog
          open={!!selectedApplication}
          onOpenChange={() => setSelectedApplication(null)}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Détails du candidat</DialogTitle>
            </DialogHeader>
            {selectedApplication && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Informations personnelles</h3>
                  <p>Nom: {selectedApplication.candidateName}</p>
                  <p>Genre: {selectedApplication.gender}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Contact</h3>
                  <p>Téléphone: {selectedApplication.contact.phone}</p>
                  <p>Email: {selectedApplication.contact.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Expérience professionnelle</h3>
                  <p>{selectedApplication.experience}</p>
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <a
                      href={selectedApplication.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le CV
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href={selectedApplication.coverLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir la lettre de motivation
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminApplications;