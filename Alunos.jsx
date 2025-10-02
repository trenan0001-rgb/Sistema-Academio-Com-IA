import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Alunos() {
  // Dados de exemplo (depois você substitui pelos do backend)
  const [alunos] = useState([
    { id: 1, nome: "Ana Souza", email: "ana@email.com", turma: "Turma A" },
    { id: 2, nome: "João Silva", email: "joao@email.com", turma: "Turma B" },
    { id: 3, nome: "Maria Santos", email: "maria@email.com", turma: "Turma A" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
