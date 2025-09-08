// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/registration';
import Dashboard from './pages/dashboard/dashboard';
import AuthLayout from './components/layout/authLayout';
import DashboardLayout from './components/layout/dashboardLayout'; 
import FeeCollection from './pages/feeManagement/feeCollection';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use AuthLayout for authentication pages */}
        <Route path="/login" element={
          <AuthLayout title="Login" subtitle="Welcome back to your account">
            <Login />
          </AuthLayout>
        } />
        <Route path="/register" element={
          <AuthLayout title="Register" subtitle="Create a new account">
            <Registration />
          </AuthLayout>
        } />
        
        {/* Use DashboardLayout for dashboard pages */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
         <Route path="/fee-collection" element={
          <DashboardLayout>
            <FeeCollection />
          </DashboardLayout>
        } />
        <Route path="/" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;