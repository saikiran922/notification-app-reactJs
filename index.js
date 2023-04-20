const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, text } = props;
  // const containerClassName = {`notification-container ${className}`}
  return (
    <div className={`notification-container ${className}`}>
      <img className="icon" src={iconUrl} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Notifications</h1>
      <div>
        <Notification
          className="IM-bg-color"
          text="Information Message"
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          className="SM-bg-color"
          text="Success Massage"
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          className="WM-bg-color"
          text="Warning Message"
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          className="EM-bg-color"
          text="Error Massage"
          iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
