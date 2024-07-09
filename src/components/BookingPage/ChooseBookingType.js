import React from "react";
import { Link } from "react-router-dom";
import "./ChooseBookingType.css";

const ChooseBookingType = ({ onSelectMode }) => {
  const handleSelectMode = (mode) => {
    if (typeof onSelectMode === "function") {
      onSelectMode(mode);
    }
  };

  return (
    <div className="choose-booking-type">
      <h2>Chọn Chế Độ Đặt Sân</h2>
      <div className="booking-modes">
        <div className="mode-card" onClick={() => handleSelectMode("single")}>
          <Link to="/booking/single">
            {" "}
            <h3>Đặt 1 Lần</h3>
          </Link>
        </div>
        <div className="mode-card" onClick={() => handleSelectMode("monthly")}>
          <Link to="/booking/monthly">
            <h3>Đặt Lịch Tháng</h3>
          </Link>
        </div>
        <div
          className="mode-card"
          onClick={() => handleSelectMode("total_hours")}
        >
          <Link to="/booking/total-hours">
            <h3>Đặt Tổng Số Giờ</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseBookingType;
