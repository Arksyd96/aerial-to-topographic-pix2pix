import React from "react";

const Notification = ({ title, message, visible }) => {
  return (
    <div className={`notif ${visible ? "visible" : ""}`}>
      <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>{title}</h3>
      <span style={{ fontSize: "15px" }}>{message}</span>
    </div>
  );
};

export default Notification;
