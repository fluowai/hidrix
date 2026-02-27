import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { 
  Users, 
  DollarSign, 
  Activity, 
  AlertTriangle 
} from 'lucide-react';

const data = [
  { name: 'Jan', revenue: 4000, leads: 24 },
  { name: 'Feb', revenue: 3000, leads: 13 },
  { name: 'Mar', revenue: 2000, leads: 98 },
  { name: 'Apr', revenue: 2780, leads: 39 },
  { name: 'May', revenue: 1890, leads: 48 },
  { name: 'Jun', revenue: 2390, leads: 38 },
];

const StatCard = ({ title, value, icon: Icon, trend, color }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className={`text-sm font-bold ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
  </div>
);

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F263A]">Visão Geral da Operação</h1>
        <p className="text-slate-500">Bem-vindo ao painel de controle Hidrix.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Receita Mensal" 
          value="R$ 124.500" 
          icon={DollarSign} 
          trend={12} 
          color="bg-[#00548F]" 
        />
        <StatCard 
          title="Novos Leads" 
          value="48" 
          icon={Users} 
          trend={8} 
          color="bg-[#7AC142]" 
        />
        <StatCard 
          title="Projetos Ativos" 
          value="15" 
          icon={Activity} 
          trend={-2} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Alertas Críticos" 
          value="3" 
          icon={AlertTriangle} 
          trend={0} 
          color="bg-red-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-[#0F263A] mb-6">Desempenho Financeiro</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#00548F" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-[#0F263A] mb-6">Captação de Leads</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#7AC142" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
