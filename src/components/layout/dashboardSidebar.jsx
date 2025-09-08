// src/components/layout/DashboardSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: 'fas fa-chart-bar', label: 'Dashboard' },
    { path: '/students', icon: 'fas fa-users', label: 'Students' },
    { path: '/fee-collection', icon: 'fas fa-money-bill-wave', label: 'Fee Management' },
    { path: '/invoices', icon: 'fas fa-file-invoice', label: 'Invoices' },
    { path: '/reports', icon: 'fas fa-chart-pie', label: 'Reports' },
    { path: '/settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="logo">
        <h2>EduFinance</h2>
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
            >
              <i className={item.icon}></i> 
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;