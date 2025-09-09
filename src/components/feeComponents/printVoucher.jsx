import React from "react";
import { useParams } from "react-router-dom";

const PrintVoucher = () => {
  const { voucherNumber } = useParams();

  return (
    <div className="print-voucher">
      <h2>Voucher #{voucherNumber}</h2>
      <p>Student Name: ...</p>
      <p>Amount: ...</p>
      <button onClick={() => window.print()} className="btn-primary">
        Print
      </button>
    </div>
  );
};

export default PrintVoucher;
