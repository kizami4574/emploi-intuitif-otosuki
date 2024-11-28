import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            Otosuki
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-accent" : "text-primary"
              } hover:text-accent transition-colors`}
            >
              Accueil
            </Link>
            <Link
              to="/jobs"
              className={`${
                isActive("/jobs") ? "text-accent" : "text-primary"
              } hover:text-accent transition-colors`}
            >
              Offres d'emploi
            </Link>
            <Link
              to="/login"
              className={`${
                isActive("/login") ? "text-accent" : "text-primary"
              } hover:text-accent transition-colors`}
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className={`${
                isActive("/register") ? "text-accent" : "text-primary"
              } hover:text-accent transition-colors`}
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;