import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Otosuki background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Rejoignez l'excellence immobilière
            </h1>
            <p className="text-xl mb-8">
              Découvrez les opportunités de carrière chez Otosuki et participez à
              notre succès dans l'immobilier de prestige.
            </p>
            <div className="flex space-x-4">
              <Link to="/jobs" className="btn-primary">
                Voir nos offres
              </Link>
              <Link to="/register" className="btn-secondary text-white border-white">
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi nous rejoindre ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-text-secondary">
                Rejoignez une équipe passionnée par l'excellence et l'innovation
                dans l'immobilier.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Développement</h3>
              <p className="text-text-secondary">
                Bénéficiez d'opportunités de formation et d'évolution continues.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <p className="text-text-secondary">
                Participez à des projets d'envergure qui façonnent le paysage
                immobilier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;