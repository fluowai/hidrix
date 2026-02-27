import React from 'react';
import { 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Clock 
} from 'lucide-react';

const equipments = [
  {
    id: 'EQ-001',
    name: 'Bomba Centrífuga Alta Pressão',
    model: 'Grundfos CR-15',
    status: 'Operacional',
    location: 'ETA - Indústria Alpha',
    lastMaintenance: '15/01/2026',
    nextMaintenance: '15/07/2026'
  },
  {
    id: 'EQ-002',
    name: 'Membrana Osmose Reversa',
    model: 'Dow Filmtec BW30',
    status: 'Manutenção',
    location: 'Oficina Central',
    lastMaintenance: '20/02/2026',
    nextMaintenance: '25/02/2026'
  },
  {
    id: 'EQ-003',
    name: 'Filtro Multimídia',
    model: 'Hidrix Custom 5000L',
    status: 'Alerta',
    location: 'ETE - Metalúrgica Steel',
    lastMaintenance: '10/12/2025',
    nextMaintenance: '10/03/2026'
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const config: Record<string, any> = {
    'Operacional': { color: 'bg-green-100 text-green-800', icon: CheckCircle },
    'Manutenção': { color: 'bg-yellow-100 text-yellow-800', icon: Wrench },
    'Alerta': { color: 'bg-red-100 text-red-800', icon: AlertTriangle },
  };

  const { color, icon: Icon } = config[status] || { color: 'bg-gray-100 text-gray-800', icon: Clock };

  return (
    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      <Icon className="w-3.5 h-3.5" />
      {status}
    </span>
  );
};

export default function Equipments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F263A]">Gestão de Equipamentos</h1>
          <p className="text-slate-500">Controle de ativos e manutenção preventiva.</p>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-[#00548F] text-white rounded-lg hover:bg-[#004375] transition-colors">
          <Wrench className="w-4 h-4 mr-2" />
          Novo Equipamento
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.map((eq) => (
          <div key={eq.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-100 rounded-lg text-slate-600">
                <Wrench className="w-6 h-6" />
              </div>
              <StatusBadge status={eq.status} />
            </div>
            
            <h3 className="text-lg font-bold text-[#0F263A] mb-1">{eq.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{eq.model}</p>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Localização</span>
                <span className="font-medium text-slate-900 text-right">{eq.location}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Última Manutenção</span>
                <span className="font-medium text-slate-900">{eq.lastMaintenance}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500">Próxima Manutenção</span>
                <span className={`font-medium ${eq.status === 'Alerta' ? 'text-red-600' : 'text-slate-900'}`}>
                  {eq.nextMaintenance}
                </span>
              </div>
            </div>

            <button className="w-full mt-6 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">
              Histórico Completo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
