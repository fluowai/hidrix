import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardOverview from './pages/DashboardOverview';
import CRM from './pages/CRM';
import Projects from './pages/Projects';
import Equipments from './pages/Equipments';
import ServiceOrders from './pages/ServiceOrders';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Dashboard Routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="crm" element={<CRM />} />
          <Route path="projects" element={<Projects />} />
          <Route path="equipments" element={<Equipments />} />
          <Route path="service-orders" element={<ServiceOrders />} />
          <Route path="settings" element={<div className="p-8 text-slate-500">Configurações (Em desenvolvimento)</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
