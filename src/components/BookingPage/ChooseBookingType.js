import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ChooseBookingType.css";

const ChooseBookingType = () => {
  const { id } = useParams();

  return (
    <div className="choose-booking-type">
      <h2>Chọn Chế Độ Đặt Sân</h2>
      <div className="booking-modes">
        <div className="mode-card">
          <Link to={`/booking/single/${id}`}>
            <h3>Đặt 1 Lần</h3>
          </Link>
        </div>
        <div className="mode-card">
          <Link to={`/booking/monthly/${id}`}>
            <h3>Đặt Lịch Tháng</h3>
          </Link>
        </div>
        <div className="mode-card">
          <Link to={`/booking/total-hours/${id}`}>
            <h3>Đặt Tổng Số Giờ</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseBookingType;
