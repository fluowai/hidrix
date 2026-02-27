import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Droplets,
  Factory,
  Wrench
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Visão Geral', path: '/app' },
    { icon: Users, label: 'CRM & Vendas', path: '/app/crm' },
    { icon: Briefcase, label: 'Projetos & Contratos', path: '/app/projects' },
    { icon: Factory, label: 'Equipamentos', path: '/app/equipments' },
    { icon: Wrench, label: 'Ordens de Serviço', path: '/app/service-orders' },
    { icon: Settings, label: 'Configurações', path: '/app/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <aside 
        className={clsx(
          "fixed inset-y-0 left-0 z-30 w-64 bg-[#0F263A] text-white transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-center border-b border-white/10 bg-[#0F263A]">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00548F] to-[#7AC142] rounded-lg transform rotate-3"></div>
              <Droplets className="absolute inset-0 m-auto h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">HIDRIX</span>
          </div>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={twMerge(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-[#00548F] text-white font-medium shadow-md" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={clsx("w-5 h-5", isActive ? "text-white" : "text-slate-400")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sair do Sistema
          </Link>
        </div>
      </aside>
    </>
  );
};

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8">
      <button 
        onClick={onMenuClick}
        className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-[#0F263A]">Admin Hidrix</p>
          <p className="text-xs text-slate-500">Gestor Operacional</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#00548F] flex items-center justify-center text-white font-bold">
          AH
        </div>
      </div>
    </header>
  );
};

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
