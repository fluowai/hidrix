import React from 'react';
import { 
  ClipboardList, 
  User, 
  MapPin, 
  Calendar,
  MoreVertical
} from 'lucide-react';

const orders = [
  {
    id: 'OS-1024',
    client: 'Indústria Química Alpha',
    service: 'Limpeza Química de Membranas',
    technician: 'Carlos Mendes',
    date: '28/02/2026',
    priority: 'Alta',
    status: 'Aberta'
  },
  {
    id: 'OS-1023',
    client: 'Condomínio Solar',
    service: 'Coleta para Análise',
    technician: 'Ana Paula',
    date: '27/02/2026',
    priority: 'Média',
    status: 'Em Andamento'
  },
  {
    id: 'OS-1022',
    client: 'Hospital Central',
    service: 'Troca de Elementos Filtrantes',
    technician: 'Roberto Silva',
    date: '26/02/2026',
    priority: 'Baixa',
    status: 'Concluída'
  }
];

const PriorityBadge = ({ priority }: { priority: string }) => {
  const colors: Record<string, string> = {
    'Alta': 'text-red-600 bg-red-50',
    'Média': 'text-yellow-600 bg-yellow-50',
    'Baixa': 'text-green-600 bg-green-50',
  };
  return (
    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${colors[priority]}`}>
      {priority}
    </span>
  );
};

export default function ServiceOrders() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F263A]">Ordens de Serviço</h1>
          <p className="text-slate-500">Gerenciamento de chamados e manutenções.</p>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-[#00548F] text-white rounded-lg hover:bg-[#004375] transition-colors">
          <ClipboardList className="w-4 h-4 mr-2" />
          Nova OS
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Cliente / Local</th>
                <th className="px-6 py-4">Serviço</th>
                <th className="px-6 py-4">Técnico</th>
                <th className="px-6 py-4">Prioridade</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {orders.map((os) => (
                <tr key={os.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-slate-500">{os.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="font-medium text-[#0F263A]">{os.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{os.service}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span>{os.technician}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <PriorityBadge priority={os.priority} />
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${os.status === 'Aberta' ? 'bg-blue-100 text-blue-800' : 
                        os.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {os.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
