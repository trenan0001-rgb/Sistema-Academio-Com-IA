import { Card, CardContent } from "@/components/ui/card"; // se não tiver, troco para div normal
import { Users, BookOpen, ClipboardList, BarChart3 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function Dashboard() {
  // Dados de exemplo (depois você substitui pelos dados reais do backend)
  const data = [
    { name: "Turmas", value: 6 },
    { name: "Alunos", value: 120 },
    { name: "Aulas", value: 35 },
    { name: "Atividades", value: 12 },
  ];

  const COLORS = ["#2563eb", "#16a34a", "#facc15", "#dc2626"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">📊 Dashboard</h1>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <Users className="text-blue-600" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Alunos</p>
            <p className="text-xl font-bold">120</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <BookOpen className="text-green-600" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Turmas</p>
            <p className="text-xl font-bold">6</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <ClipboardList className="text-yellow-500" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Aulas</p>
            <p className="text-xl font-bold">35</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <BarChart3 className="text-red-600" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Atividades</p>
            <p className="text-xl font-bold">12</p>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-bold mb-4">Distribuição de Dados</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
