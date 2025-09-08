// src/pages/FeeCollection/FeeCollection.jsx
import React, { useState } from 'react';
import CollectFees from './collectFees';
import ViewRecords from './viewReport';
import GenerateReports from './generateReport';
import './feeCollection.css';

const FeeCollection = () => {
  const [activeTab, setActiveTab] = useState('collect');

  const renderContent = () => {
    switch (activeTab) {
      case 'collect':
        return <CollectFees />;
      case 'view':
        return <ViewRecords />;
      case 'generate':
        return <GenerateReports />;
      default:
        return <CollectFees />;
    }
  };

  return (
    <div className="fee-collection-page">
      <div className="page-header">
        <h1>Fee Collection</h1>
        <p>Manage and collect student fees</p>
      </div>

      <div className="tabs">
        <button 
          className={activeTab === 'collect' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('collect')}
        >
          <i className="fas fa-money-bill-wave"></i>
          Collect Fees
        </button>
        <button 
          className={activeTab === 'view' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('view')}
        >
          <i className="fas fa-list"></i>
          View Records
        </button>
        <button 
          className={activeTab === 'generate' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('generate')}
        >
          <i className="fas fa-chart-bar"></i>
          Generate Reports
        </button>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default FeeCollection;