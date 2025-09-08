// src/pages/dashboard/Dashboard.jsx
import React from 'react';
import DashboardHeader from '../../components/layout/dashboardHeader';
import StatsCards from '../../pages/dashboard/statsCards';
import ChartsContainer from '../../pages/dashboard/chartsContainer';
import InfoCards from '../../pages/dashboard/infocards';
import TransactionsTable from '../../pages/dashboard/transectionTable';
import authLayout from '../../components/layout/authLayout';
import './dashboard.css';

const Dashboard = () => {
  return (
    // <authLayout>
    <>
      <DashboardHeader />
      <StatsCards />
      <ChartsContainer />
      <InfoCards />
      <TransactionsTable />
    </>
  );
};

export default Dashboard;