// src/components/dashboard/ChartsContainer.jsx
import React from 'react';

const ChartsContainer = () => {
  return (
    <div className="charts-container">
      <div className="card chart-card">
        <div className="chart-title">
          <h3>Monthly Revenue</h3>
          <select>
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
          </select>
        </div>
        <div className="chart-container">
          <p className="placeholder-text">Chart will be rendered here with backend data</p>
        </div>
      </div>
      <div className="card chart-card">
        <div className="chart-title">
          <h3>Fee Status Distribution</h3>
        </div>
        <div className="chart-container">
          <p className="placeholder-text">Chart will be rendered here with backend data</p>
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;