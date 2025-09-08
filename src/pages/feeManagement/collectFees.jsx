// src/pages/FeeCollection/CollectFees.jsx
import React, { useState } from 'react';

const CollectFees = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    class: '',
    amount: '',
    paymentDate: new Date().toISOString().split('T')[0],
    paymentMethod: 'cash',
    remarks: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fee collection data:', formData);
    // Here you'll integrate with your API
    alert('Fee collected successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="collect-fees">
      <h2>Collect Student Fees</h2>
      
      <form onSubmit={handleSubmit} className="fee-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Student ID *</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              placeholder="Enter student ID"
            />
          </div>

          <div className="form-group">
            <label>Student Name *</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              placeholder="Enter student name"
            />
          </div>

          <div className="form-group">
            <label>Class *</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
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

          <div className="form-group">
            <label>Amount (Rs) *</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="Enter amount"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Payment Date *</label>
            <input
              type="date"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Method *</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="cash">Cash</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="cheque">Cheque</option>
              <option value="online">Online Payment</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Additional notes (optional)"
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn">
          <i className="fas fa-check"></i>
          Collect Fee
        </button>
      </form>
    </div>
  );
};

export default CollectFees;