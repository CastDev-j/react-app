import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <FaExclamationTriangle className="text-neutral-100 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-neutral-100 mb-2">404</h1>
      <p className="text-xl text-neutral-100/50">Página no encontrada</p>
      <NavLink to="/" className="text-neutral-100 underline mt-4">
        Ir a la página de inicio
      </NavLink>
    </div>
  );
}
