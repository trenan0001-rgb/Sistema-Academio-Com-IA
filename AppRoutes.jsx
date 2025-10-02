import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

// Páginas
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Alunos from "../pages/Alunos";
import Turmas from "../pages/Turmas";
import Aulas from "../pages/Aulas";
import Atividades from "../pages/Atividades";
import Relatorios from "../pages/Relatorios";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Página inicial -> Login */}
        <Route path="/" element={<Login />} />

        {/* Rotas protegidas com Navbar */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/alunos"
          element={
            <>
              <Navbar />
              <Alunos />
            </>
          }
        />
        <Route
          path="/turmas"
          element={
            <>
              <Navbar />
              <Turmas />
            </>
          }
        />
        <Route
          path="/aulas"
          element={
            <>
              <Navbar />
              <Aulas />
            </>
          }
        />
        <Route
          path="/atividades"
          element={
            <>
              <Navbar />
              <Atividades />
            </>
          }
        />
        <Route
          path="/relatorios"
          element={
            <>
              <Navbar />
              <Relatorios />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
