// src/pages/Dashboard.jsx
import AuthLayout from "../../components/layout/authLayout";

const Dashboard = () => {
  return (
    <AuthLayout title="Dashboard" subtitle="Welcome back!">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        <p className="text-gray-600 text-center mt-4">
          You are successfully logged in 🎉
        </p>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
