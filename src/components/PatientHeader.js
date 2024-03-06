import "./PatientHeader.css";

const PatientHeader = () => {
  return (
    <header className="patient-header">
      <div className="patient-header-child" />
      <div className="time-line">
        <img
          className="skinclublogo-logotype-white-1-icon2"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-1@2x.png"
        />
      </div>
      <div className="total-status">
        <div className="sunday-20-august-wrapper">
          <h3 className="sunday-20-august2">Sunday, 20 August</h3>
        </div>
        <div className="pm2">1:50 PM</div>
        <div className="name-and-image">
          <div className="name-and-image-child" />
          <img
            className="john-doe-frame1"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default PatientHeader;
