import React from 'react';
import { 
  FileText, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

const projects = [
  {
    id: 'PRJ-2024-001',
    client: 'Indústria Química Alpha',
    type: 'Implantação ETA',
    status: 'Em Andamento',
    progress: 65,
    deadline: '15/04/2026',
    manager: 'Eng. Ricardo'
  },
  {
    id: 'PRJ-2024-002',
    client: 'Metalúrgica Steel',
    type: 'Manutenção Preventiva',
    status: 'Agendado',
    progress: 0,
    deadline: '10/03/2026',
    manager: 'Téc. Marcos'
  },
  {
    id: 'PRJ-2024-003',
    client: 'Hospital Central',
    type: 'Laudo de Potabilidade',
    status: 'Concluído',
    progress: 100,
    deadline: '20/02/2026',
    manager: 'Eng. Julia'
  }
];

const StatusIndicator = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Em Andamento': 'text-blue-600 bg-blue-50 border-blue-200',
    'Agendado': 'text-yellow-600 bg-yellow-50 border-yellow-200',
    'Concluído': 'text-green-600 bg-green-50 border-green-200',
    'Atrasado': 'text-red-600 bg-red-50 border-red-200',
  };

  const icons: Record<string, any> = {
    'Em Andamento': Clock,
    'Agendado': Calendar,
    'Concluído': CheckCircle2,
    'Atrasado': AlertCircle,
  };

  const Icon = icons[status] || Clock;

  return (
    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || 'text-gray-600 bg-gray-50 border-gray-200'}`}>
      <Icon className="w-3.5 h-3.5" />
      {status}
    </span>
  );
};

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F263A]">Projetos & Contratos</h1>
          <p className="text-slate-500">Acompanhamento de obras e serviços em execução.</p>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-[#00548F] text-white rounded-lg hover:bg-[#004375] transition-colors">
          <FileText className="w-4 h-4 mr-2" />
          Novo Projeto
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-[#0F263A]">{project.client}</h3>
                  <StatusIndicator status={project.status} />
                </div>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="font-medium text-slate-700">{project.id}</span> • {project.type}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Prazo de Entrega</p>
                <p className="font-bold text-slate-900">{project.deadline}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Progresso</span>
                <span className="font-bold text-[#00548F]">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div 
                  className="bg-[#00548F] h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  {project.manager.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-sm text-slate-600">{project.manager}</span>
              </div>
              <button className="text-sm font-medium text-[#00548F] hover:underline">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
