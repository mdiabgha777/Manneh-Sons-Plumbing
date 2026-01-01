import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl md:text-7xl font-bold text-[var(--accent)]">404</h1>
        <p className="mb-6 text-xl md:text-2xl text-[var(--muted-foreground)]">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-[var(--accent)] text-white px-6 py-3 rounded-md hover:bg-[var(--accent3)] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;