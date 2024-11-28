import { useState } from "react";

// Mock data for jobs
const mockJobs = [
  {
    id: 1,
    title: "Agent Immobilier Senior",
    location: "Paris",
    type: "CDI",
    description: "Nous recherchons un agent immobilier expérimenté pour rejoindre notre équipe...",
    requirements: ["5 ans d'expérience", "Maîtrise des outils CRM", "Excellent relationnel"],
  },
  {
    id: 2,
    title: "Conseiller Immobilier",
    location: "Lyon",
    type: "CDI",
    description: "Poste de conseiller immobilier pour notre agence de Lyon...",
    requirements: ["3 ans d'expérience", "Permis B", "Dynamique et motivé"],
  },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Nos offres d'emploi
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {mockJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <div className="flex space-x-4 text-sm text-text-secondary mb-4">
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
              <p className="text-text-secondary mb-4">
                {job.description}
              </p>
              <button className="btn-primary">
                Voir l'offre
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;