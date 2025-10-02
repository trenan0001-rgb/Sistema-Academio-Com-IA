import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Turmas() {
  const [turmas] = useState([
    { id: 1, nome: "Turma A", ano: "2024", professor: "Carlos" },
    { id: 2, nome: "Turma B", ano: "2024", professor: "Fernanda" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-600">🏫 Turmas</h1>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          <Plus size={18} /> Nova Turma
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-2xl overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Nome</th>
              <th className="text-left py-3 px-4">Ano</th>
              <th className="text-left py-3 px-4">Professor</th>
              <th className="text-center py-3 px-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {turmas.map((turma, index) => (
              <tr key={turma.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4">{turma.nome}</td>
                <td className="py-3 px-4">{turma.ano}</td>
                <td className="py-3 px-4">{turma.professor}</td>
                <td className="py-3 px-4 text-center flex gap-3 justify-center">
                  <button className="text-green-600 hover:text-green-800">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
