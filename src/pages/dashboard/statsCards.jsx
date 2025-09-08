// src/components/dashboard/StatsCards.jsx
import React from 'react';

const StatsCards = () => {
  const stats = [
    { title: 'TOTAL COLLECTED', value: '--', description: 'Data will be loaded from backend' },
    { title: 'PENDING FEES', value: '--', description: 'Data will be loaded from backend' },
    { title: 'TOTAL STUDENTS', value: '--', description: 'Data will be loaded from backend' },
    { title: 'OVERDUE FEES', value: '--', description: 'Data will be loaded from backend' },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="card stat-card">
          <h3>{stat.title}</h3>
          <h2>{stat.value}</h2>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;