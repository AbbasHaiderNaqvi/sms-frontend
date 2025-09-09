import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ for navigation
import GenerateVoucherModal from '../../components/feeComponents/feeVoucher';
import VoucherList from '../../components/feeComponents/voucherList';

const CollectFees = () => {
  const [activeTab, setActiveTab] = useState('generate');
  const [vouchers, setVouchers] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);

  const navigate = useNavigate(); // ✅ to navigate to print page

  // Handle voucher generation
  const handleVoucherGenerated = (newVoucher) => {
    if (newVoucher) {
      const voucherWithStatus = { 
        ...newVoucher, 
        status: 'generated', 
        generatedDate: new Date().toISOString() 
      };

      setVouchers([...vouchers, voucherWithStatus]);

      // ✅ Redirect to print page after generating
      navigate(`/print-voucher/${voucherWithStatus.voucherNumber}`);
    }
    setIsVoucherModalOpen(false);
  };

  // Handle voucher submission (mark as paid)
  const handleSubmitVoucher = (e) => {
    e.preventDefault();
    
    if (!selectedVoucher) {
      alert("Please select a voucher first");
      return;
    }

    const updatedVouchers = vouchers.map(voucher => 
      voucher.voucherNumber === selectedVoucher.voucherNumber 
        ? { ...voucher, status: 'paid', paidDate: new Date().toISOString() } 
        : voucher
    );
    
    setVouchers(updatedVouchers);
    setSelectedVoucher(null);

    console.log("Marking voucher as paid:", selectedVoucher.voucherNumber);
  };

  return (
    <div className="collect-fees">
      <div className="section-header">
        <h2>Collect Student Fees</h2>
      </div>
      
      {/* Tab Navigation */}
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'generate' ? 'active' : ''}`}
          onClick={() => setActiveTab('generate')}
        >
          Generate Voucher
        </button>
        <button 
          className={`tab-btn ${activeTab === 'submit' ? 'active' : ''}`}
          onClick={() => setActiveTab('submit')}
        >
          Submit Voucher
        </button>
      </div>
      
      {/* Generate Voucher Tab */}
      {activeTab === 'generate' && (
        <div className="tab-content">
          <div className="form-group">
            <button 
              className="btn-primary"
              onClick={() => setIsVoucherModalOpen(true)}
            >
              <i className="fas fa-receipt"></i> Generate New Voucher
            </button>
          </div>
          
          <VoucherList 
            vouchers={vouchers.filter(v => v.status === 'generated')}
            title="Generated Vouchers (Unpaid)"
          />
        </div>
      )}
      
      {/* Submit Voucher Tab */}
      {activeTab === 'submit' && (
        <div className="tab-content">
          <form onSubmit={handleSubmitVoucher} className="fee-form">
            <div className="form-group">
              <label>Select Voucher to Mark as Paid</label>
              <select 
                value={selectedVoucher ? selectedVoucher.voucherNumber : ''}
                onChange={(e) => {
                  const voucher = vouchers.find(v => v.voucherNumber === e.target.value);
                  setSelectedVoucher(voucher);
                }}
                required
              >
                <option value="">Select a voucher</option>
                {vouchers
                  .filter(v => v.status === 'generated')
                  .map(voucher => (
                    <option key={voucher.voucherNumber} value={voucher.voucherNumber}>
                      #{voucher.voucherNumber} - {voucher.studentName} - ${voucher.amount}
                    </option>
                  ))
                }
              </select>
            </div>

            {selectedVoucher && (
              <div className="voucher-details">
                <h4>Voucher Details</h4>
                <p><strong>Student:</strong> {selectedVoucher.studentName}</p>
                <p><strong>Amount:</strong> ${selectedVoucher.amount}</p>
                <p><strong>Generated on:</strong> {new Date(selectedVoucher.generatedDate).toLocaleDateString()}</p>
              </div>
            )}

            <button type="submit" className="btn-primary">
              Mark as Paid
            </button>
          </form>
          
          <VoucherList 
            vouchers={vouchers.filter(v => v.status === 'paid')}
            title="Paid Vouchers"
          />
        </div>
      )}
      
      {isVoucherModalOpen && (
        <GenerateVoucherModal
          isOpen={isVoucherModalOpen}
          onClose={() => setIsVoucherModalOpen(false)}
          onVoucherGenerated={handleVoucherGenerated}
        />
      )}
    </div>
  );
};

export default CollectFees;
