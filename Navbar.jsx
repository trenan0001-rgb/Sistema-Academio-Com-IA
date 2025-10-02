import { Link, useLocation } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/turmas", label: "Turmas" },
    { path: "/alunos", label: "Alunos" },
    { path: "/aulas", label: "Aulas" },
    { path: "/atividades", label: "Atividades" },
    { path: "/relatorios", label: "Relatórios" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo / Nome */}
        <h1 className="text-lg font-bold">🎓 Sistema Acadêmico</h1>

        {/* Links Desktop */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-gray-200 ${
                location.pathname === link.path ? "font-bold underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botão sair */}
        <button className="hidden md:flex items-center gap-2 hover:text-gray-200">
          <LogOut size={18} /> Sair
        </button>

        {/* Mobile menu */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Links Mobile */}
      {open && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block hover:text-gray-200 ${
                location.pathname === link.path ? "font-bold underline" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="flex items-center gap-2 mt-2 hover:text-gray-200">
            <LogOut size={18} /> Sair
          </button>
        </div>
      )}
    </nav>
  );
}
