// src/components/feeVoucher/GenerateVoucherModal.jsx
import React, { useState } from 'react';
import './feeVoucher.css';

const feeVoucher = ({ isOpen, onClose, onVoucherGenerated }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    class: '',
    feeType: 'monthly',
    amount: '',
    dueDate: '',
    description: ''
  });

  const [generatedVoucher, setGeneratedVoucher] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a random voucher number
    const voucherNumber = `VCH-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Create voucher object
    const voucher = {
      ...formData,
      voucherNumber,
      issueDate: new Date().toISOString().split('T')[0],
      status: 'generated'
    };
    
    setGeneratedVoucher(voucher);
    
    // If a callback is provided, pass the voucher data
    if (onVoucherGenerated) {
      onVoucherGenerated(voucher);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setGeneratedVoucher(null);
    setFormData({
      studentId: '',
      studentName: '',
      class: '',
      feeType: 'monthly',
      amount: '',
      dueDate: '',
      description: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="voucher-modal-overlay">
      <div className="voucher-modal">
        <div className="modal-header">
          <h2>Generate Fee Voucher</h2>
          <button className="close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {!generatedVoucher ? (
          <form onSubmit={handleSubmit} className="voucher-form">
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
                <label>Fee Type *</label>
                <select
                  name="feeType"
                  value={formData.feeType}
                  onChange={handleChange}
                  required
                >
                  <option value="monthly">Monthly Fee</option>
                  <option value="quarterly">Quarterly Fee</option>
                  <option value="annual">Annual Fee</option>
                  <option value="exam">Exam Fee</option>
                  <option value="transport">Transport Fee</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Amount (₹) *</label>
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
                <label>Due Date *</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Fee description (optional)"
                rows="3"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={handleClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Generate Voucher
              </button>
            </div>
          </form>
        ) : (
          <div className="voucher-preview">
            <div className="voucher-header">
              <h3>Fee Voucher Generated Successfully!</h3>
              <p>Voucher Number: <strong>{generatedVoucher.voucherNumber}</strong></p>
            </div>

            <div className="voucher-details">
              <div className="detail-item">
                <span className="label">Student ID:</span>
                <span className="value">{generatedVoucher.studentId}</span>
              </div>
              <div className="detail-item">
                <span className="label">Student Name:</span>
                <span className="value">{generatedVoucher.studentName}</span>
              </div>
              <div className="detail-item">
                <span className="label">Class:</span>
                <span className="value">Grade {generatedVoucher.class}</span>
              </div>
              <div className="detail-item">
                <span className="label">Fee Type:</span>
                <span className="value">{generatedVoucher.feeType}</span>
              </div>
              <div className="detail-item">
                <span className="label">Amount:</span>
                <span className="value">₹{generatedVoucher.amount}</span>
              </div>
              <div className="detail-item">
                <span className="label">Due Date:</span>
                <span className="value">{generatedVoucher.dueDate}</span>
              </div>
              <div className="detail-item">
                <span className="label">Issue Date:</span>
                <span className="value">{generatedVoucher.issueDate}</span>
              </div>
              {generatedVoucher.description && (
                <div className="detail-item full-width">
                  <span className="label">Description:</span>
                  <span className="value">{generatedVoucher.description}</span>
                </div>
              )}
            </div>

            <div className="voucher-actions">
              <button className="btn-secondary" onClick={handlePrint}>
                <i className="fas fa-print"></i> Print Voucher
              </button>
              <button className="btn-primary" onClick={() => {
                setGeneratedVoucher(null);
                onClose();
              }}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default feeVoucher;