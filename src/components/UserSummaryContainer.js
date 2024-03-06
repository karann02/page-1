import "./UserSummaryContainer.css";

const UserSummaryContainer = () => {
  return (
    <div className="summary-frame2">
      <div className="summary-frame-child" />
      <div className="logo-and-summary">
        <img
          className="skinclublogo-logotype-white-2-icon3"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-2@2x.png"
        />
        <div className="date-and-total">
          <div className="summery3">SUMMERY</div>
          <img className="summary-text-icon" loading="lazy" alt="" />
        </div>
      </div>
      <div className="doctor-frame-wrapper">
        <div className="doctor-frame">
          <div className="dr-vihang3">Dr. Vihang</div>
          <div className="jane-doe3">Jane Doe</div>
        </div>
      </div>
      <div className="serum-item-frame">
        <div className="rate-qty-frame">
          <div className="rate-qty-frame-child" />
          <div className="rectangle-parent67">
            <div className="frame-child74" />
            <div className="item-frame">
              <div className="item4">item</div>
            </div>
            <div className="rate4">Rate</div>
            <div className="qty4">Qty</div>
            <div className="amount5">Amount</div>
          </div>
          <div className="vitamin-a-night-serum-group1">
            <div className="vitamin-a-night-serum-group2">
              <div className="vitamin-a-night-serum-group3">
                <div className="vitamin-a-night11">Vitamin A Night Serum</div>
                <div className="vitamin-a-night12">$90</div>
              </div>
              <div className="div100">2</div>
              <div className="div101">$180</div>
            </div>
          </div>
          <div className="vitamin-a-night-serum-group4">
            <div className="frame-parent23">
              <div className="vitamin-a-night-serum-parent7">
                <div className="vitamin-a-night13">Vitamin A Night Serum</div>
                <div className="div102">$90</div>
              </div>
              <div className="div103">2</div>
              <div className="div104">$180</div>
            </div>
          </div>
          <div className="vitamin-a-night-serum-group5">
            <div className="frame-parent24">
              <div className="vitamin-a-night-serum-parent8">
                <div className="vitamin-a-night14">Vitamin A Night Serum</div>
                <div className="div105">$90</div>
              </div>
              <div className="div106">2</div>
              <div className="div107">$180</div>
            </div>
          </div>
        </div>
        <div className="invoice-footer">
          <div className="line-break">
            <div className="subtotal-line">
              <div className="subtotal5">Subtotal</div>
              <div className="tax-53">tax 5%</div>
              <div className="discount-104">Discount 10%</div>
            </div>
            <div className="subtotal-line1">
              <div className="div108">$540.00</div>
              <div className="div109">$00.00</div>
              <div className="div110">$00.00</div>
            </div>
          </div>
        </div>
        <div className="empty-line" />
        <div className="total-frame2">
          <div className="grand-total">
            <div className="total7">total</div>
            <div className="total-label1">$540.00</div>
          </div>
        </div>
        <div className="invoice-notes">
          <div className="invoice-notes-child" />
          <div className="create-new-inv">
            <div className="notesterms-wrapper">
              <div className="notesterms3">Notes/Terms</div>
            </div>
            <input
              className="lorem-ipsum-dolor3"
              placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSummaryContainer;
