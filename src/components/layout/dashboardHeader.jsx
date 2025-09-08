// src/components/layout/DashboardHeader.jsx
import React from 'react';
import Input from '../ui/button';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="welcome">
        <h1>Fee Management Dashboard</h1>
        <p>Welcome back, Admin! Here's today's overview.</p>
      </div>
      <div className="search-box">
        <Input 
          type="text" 
          placeholder="Search students, classes, fees..." 
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default DashboardHeader;