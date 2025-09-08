// src/components/dashboard/InfoCards.jsx
import React from 'react';

const InfoCards = () => {
  return (
    <div className="info-cards">
      <div className="card info-card">
        <div className="info-title">Recent Activities</div>
        <p className="placeholder-text">Recent activities will be displayed here</p>
      </div>
      <div className="card info-card">
        <div className="info-title">Upcoming Due Dates</div>
        <p className="placeholder-text">Upcoming due dates will be displayed here</p>
      </div>
    </div>
  );
};

export default InfoCards;