// components/feeComponents/VoucherList.js
import React from 'react';

const VoucherList = ({ vouchers, title }) => {
  if (vouchers.length === 0) {
    return <div className="voucher-list"><p>No vouchers found.</p></div>;
  }

  return (
    <div className="voucher-list">
      <h3>{title}</h3>
      <div className="voucher-cards">
        {vouchers.map(voucher => (
          <div key={voucher.voucherNumber} className="voucher-card">
            <div className="voucher-header">
              <span className="voucher-number">#{voucher.voucherNumber}</span>
              <span className={`status-badge ${voucher.status}`}>
                {voucher.status}
              </span>
            </div>
            <div className="voucher-details">
              <p><strong>Student:</strong> {voucher.studentName}</p>
              <p><strong>Amount:</strong> ${voucher.amount}</p>
              <p><strong>Date:</strong> {new Date(voucher.generatedDate).toLocaleDateString()}</p>
              {voucher.paidDate && (
                <p><strong>Paid on:</strong> {new Date(voucher.paidDate).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherList;