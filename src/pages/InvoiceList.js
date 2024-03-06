import FrameGroup from "../components/FrameGroup";
import SubtotaltaxDiscount from "../components/SubtotaltaxDiscount";
import FrameLineSeparatorContainer from "../components/FrameLineSeparatorContainer";
import UserSummaryContainer from "../components/UserSummaryContainer";
import "./InvoiceList.css";

const InvoiceList = () => {
  return (
    <div className="invoicelist">
      <FrameGroup />
      <main className="rate-qty-amount">
        <SubtotaltaxDiscount />
        <section className="text-frame">
          <div className="rectangle-shape">
            <div className="vector-shape">
              <h1 className="invoice">Invoice</h1>
              <h1 className="invoice-list">Invoice list</h1>
            </div>
            <div className="text-frame1">
              <div className="line-segment-parent">
                <img className="line-segment-icon" loading="lazy" alt="" />
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="text-frame2">
                    <div className="rectangle-shape1">
                      <div className="text-frame3">
                        <div className="text-frame-child" />
                        <input
                          className="search-by-patient"
                          placeholder="Search by patient name"
                          type="text"
                        />
                        <div className="text-frame4">
                          <img
                            className="text-frame-icon"
                            alt=""
                            src="/vector-1.svg"
                          />
                          <img
                            className="text-frame-item"
                            alt=""
                            src="/line-19.svg"
                          />
                        </div>
                      </div>
                      <select className="group">
                        <option value="Selecta Date : 20 Aug">
                          Selecta Date : 20 Aug
                        </option>
                        <option value="Selecta Date : 21 Aug">
                          Selecta Date : 21 Aug
                        </option>
                        <option value="Selecta Date : 22 Aug">
                          Selecta Date : 22 Aug
                        </option>
                      </select>
                    </div>
                    <div className="frame-total-status" />
                  </div>
                  <FrameLineSeparatorContainer />
                </div>
              </div>
              <div className="rectangle-group">
                <div className="frame-item" />
                <div className="frame-inner" />
                <div className="frame-parent">
                  <div className="preview-invoice-parent">
                    <h3 className="preview-invoice">Preview Invoice</h3>
                    <div className="tax-summary">
                      <div className="tax-summary-child" />
                      <img
                        className="vector-container-icon"
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </div>
                  <UserSummaryContainer />
                </div>
                <button className="rectangle-container">
                  <div className="rectangle-div" />
                  <div className="create-new-invoice">Create New Invoice</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvoiceList;
