// src/pages/FeeCollection/GenerateReports.jsx
import React, { useState } from 'react';

const GenerateReports = () => {
  const [reportType, setReportType] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [classFilter, setClassFilter] = useState('');

  const generateReport = () => {
    console.log('Generating report:', {
      reportType,
      startDate,
      endDate,
      classFilter
    });
    // Here you'll integrate with your API
    alert('Report generated successfully!');
  };

  return (
    <div className="generate-reports">
      <h2>Generate Fee Reports</h2>
      
      <div className="report-options">
        <div className="option-group">
          <label>Report Type *</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="daily">Daily Collection</option>
            <option value="monthly">Monthly Summary</option>
            <option value="student">Student-wise</option>
            <option value="class">Class-wise</option>
            <option value="outstanding">Outstanding Fees</option>
          </select>
        </div>

        <div className="option-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="option-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="option-group">
          <label>Class Filter</label>
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
          >
            <option value="">All Classes</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
          </select>
        </div>
      </div>

      <button onClick={generateReport} className="generate-btn">
        <i className="fas fa-file-alt"></i>
        Generate Report
      </button>

      <div className="report-preview">
        <h3>Report Preview</h3>
        <div className="preview-placeholder">
          <p>Report will be generated here based on your criteria</p>
          <p>Total Collections: ₹0.00</p>
          <p>Number of Transactions: 0</p>
        </div>
      </div>

      <div className="export-options">
        <button className="export-option">
          <i className="fas fa-file-pdf"></i>
          Export as PDF
        </button>
        <button className="export-option">
          <i className="fas fa-file-excel"></i>
          Export as Excel
        </button>
        <button className="export-option">
          <i className="fas fa-print"></i>
          Print Report
        </button>
      </div>
    </div>
  );
};

export default GenerateReports;