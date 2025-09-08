// src/layout/DashboardLayout.jsx
import React from 'react';
import DashboardSidebar from './dashboardSidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-wrapper" style={{ 
      backgroundColor: '#f5f7fb', 
      width: '100vw', 
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <DashboardSidebar />
      <div className="dashboard-main-content" style={{ backgroundColor: '#f5f7fb' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;