import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal,
  Phone,
  Mail
} from 'lucide-react';

const leads = [
  {
    id: 1,
    name: 'Indústria Química Alpha',
    contact: 'Roberto Silva',
    email: 'roberto@alpha.com',
    phone: '(11) 98765-4321',
    status: 'Negociação',
    value: 'R$ 450.000',
    date: '27/02/2026'
  },
  {
    id: 2,
    name: 'Metalúrgica Steel',
    contact: 'Ana Souza',
    email: 'ana@steel.com',
    phone: '(11) 91234-5678',
    status: 'Novo Lead',
    value: 'R$ 120.000',
    date: '26/02/2026'
  },
  {
    id: 3,
    name: 'Agroindústria Verde',
    contact: 'Carlos Lima',
    email: 'carlos@verde.com',
    phone: '(19) 99888-7777',
    status: 'Proposta Enviada',
    value: 'R$ 85.000',
    date: '25/02/2026'
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    'Novo Lead': 'bg-blue-100 text-blue-800',
    'Negociação': 'bg-yellow-100 text-yellow-800',
    'Proposta Enviada': 'bg-purple-100 text-purple-800',
    'Fechado': 'bg-green-100 text-green-800',
    'Perdido': 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default function CRM() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F263A]">CRM & Vendas</h1>
          <p className="text-slate-500">Gerencie seus leads e oportunidades comerciais.</p>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-[#00548F] text-white rounded-lg hover:bg-[#004375] transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Novo Lead
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por empresa, contato ou email..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#00548F] focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-600">
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Empresa</th>
                <th className="px-6 py-4">Contato</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Valor Estimado</th>
                <th className="px-6 py-4">Data Entrada</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#0F263A]">{lead.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-slate-900">{lead.contact}</span>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{lead.value}</td>
                  <td className="px-6 py-4 text-slate-500">{lead.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-sm text-slate-500">
          <span>Mostrando 3 de 48 leads</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white">Próxima</button>
          </div>
        </div>
      </div>
    </div>
  );
}
