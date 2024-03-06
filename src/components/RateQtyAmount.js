import "./RateQtyAmount.css";

const RateQtyAmount = () => {
  return (
    <div className="rate-qty-amount1">
      <div className="rate-qty-amount-child" />
      <div className="subtotal-tax">
        <h2 className="overview2">Overview</h2>
      </div>
      <div className="subtotal-tax1">
        <h2 className="profile2">Profile</h2>
      </div>
      <div className="subtotal-tax2">
        <h2 className="appointments1">Appointments</h2>
      </div>
      <div className="subtotal-tax3">
        <h2 className="history1">History</h2>
      </div>
      <div className="subtotal-tax4">
        <div className="videos-parent">
          <h3 className="videos1">Videos</h3>
          <h3 className="videos-library1">Videos Library</h3>
        </div>
      </div>
      <div className="subtotal-tax5">
        <h2 className="messages1">Messages</h2>
      </div>
      <div className="subtotal-tax6">
        <h2 className="support1">Support</h2>
      </div>
      <div className="subtotal-tax7">
        <div className="faqs-parent">
          <h3 className="faqs1">FAQ’s</h3>
          <h3 className="procedure-information1">Procedure Information</h3>
        </div>
      </div>
      <div className="subtotal-tax8">
        <h2 className="aftercare1">Aftercare</h2>
      </div>
      <div className="subtotal-tax9">
        <h3 className="quizzes1">Quizzes</h3>
        <h3 className="health-skin1">{`Health & Skin Assesment`}</h3>
      </div>
      <div className="logo-and-title">
        <div className="summary1">
          <h2 className="finances1">Finances</h2>
        </div>
        <button className="preview-invoice-btn">
          <div className="preview-invoice-btn-child" />
          <div className="virtual-consultation1">Virtual Consultation</div>
        </button>
      </div>
    </div>
  );
};

export default RateQtyAmount;
