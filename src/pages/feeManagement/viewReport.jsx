// src/pages/FeeCollection/ViewRecords.jsx
import React, { useState } from 'react';

const ViewRecords = () => {
  const [filters, setFilters] = useState({
    studentId: '',
    class: '',
    fromDate: '',
    toDate: ''
  });

  // Sample data - replace with your API data
  const feeRecords = [
    { id: 1, studentId: 'ST001', studentName: 'John Doe', class: 'Grade 5', amount: 2500, paymentDate: '2025-09-07', paymentMethod: 'cash' },
    { id: 2, studentId: 'ST002', studentName: 'Jane Smith', class: 'Grade 8', amount: 3000, paymentDate: '2025-09-06', paymentMethod: 'bank_transfer' },
    { id: 3, studentId: 'ST003', studentName: 'Mike Johnson', class: 'Grade 3', amount: 2000, paymentDate: '2025-09-05', paymentMethod: 'online' }
  ];

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="view-records">
      <div className="section-header">
        <h2>Fee Collection Records</h2>
        <div className="filters">
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={filters.studentId}
            onChange={handleFilterChange}
          />
          <select
            name="class"
            value={filters.class}
            onChange={handleFilterChange}
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
          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleFilterChange}
            placeholder="From Date"
          />
          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleFilterChange}
            placeholder="To Date"
          />
        </div>
      </div>

      <div className="records-table">
        <table>
          <thead>
            <tr>
              <th>Receipt ID</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Amount (₹)</th>
              <th>Payment Date</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feeRecords.map(record => (
              <tr key={record.id}>
                <td>#{record.id}</td>
                <td>{record.studentId}</td>
                <td>{record.studentName}</td>
                <td>{record.class}</td>
                <td>₹{record.amount}</td>
                <td>{record.paymentDate}</td>
                <td>
                  <span className={`payment-method ${record.paymentMethod}`}>
                    {record.paymentMethod.replace('_', ' ')}
                  </span>
                </td>
                <td>
                  <button className="action-btn view">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="action-btn print">
                    <i className="fas fa-print"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <p>Showing {feeRecords.length} records</p>
        <button className="export-btn">
          <i className="fas fa-download"></i>
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default ViewRecords;