import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Atividades() {
  const [atividades] = useState([
    { id: 1, titulo: "Exercícios de Matemática", prazo: "15/02/2024", turma: "Turma A" },
    { id: 2, titulo: "Redação", prazo: "18/02/2024", turma: "Turma B" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-600">📝 Atividades</h1>
        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          <Plus size={18} /> Nova Atividade
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-2xl overflow-hidden">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Título</th>
              <th className="text-left py-3 px-4">Prazo</th>
              <th className="text-left py-3 px-4">Turma</th>
              <th className="text-center py-3 px-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {atividades.map((atividade, index) => (
              <tr key={atividade.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4">{atividade.titulo}</td>
                <td className="py-3 px-4">{atividade.prazo}</td>
                <td className="py-3 px-4">{atividade.turma}</td>
                <td className="py-3 px-4 text-center flex gap-3 justify-center">
                  <button className="text-red-600 hover:text-red-800">
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
