import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();
  const { courtName, bookingType, selectedTime, totalPrice } = location.state;

  return (
    <div className="booking-success">
      <h2>Đặt Sân Thành Công</h2>
      <div className="booking-details">
        <p>
          <strong>Sân đã chọn:</strong> {courtName}
        </p>
        <p>
          <strong>Loại hình đặt sân:</strong> {bookingType}
        </p>
        {bookingType === "Đặt theo số giờ" && (
          <p>
            <strong>Thời gian:</strong> {selectedTime}
          </p>
        )}
        <p>
          <strong>Tổng giá tiền:</strong> {totalPrice.toLocaleString()} VND
        </p>
      </div>
    </div>
  );
};

export default BookingSuccess;
