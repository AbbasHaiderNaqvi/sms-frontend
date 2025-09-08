// src/components/dashboard/TransactionsTable.jsx
import React from 'react';
import Button from '../../components/ui/button';

const TransactionsTable = () => {
  return (
    <div className="students-table">
      <div className="table-header">
        <h3>Recent Fee Transactions</h3>
        <Button>View All</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="no-data">
              Transaction data will be loaded from backend
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;