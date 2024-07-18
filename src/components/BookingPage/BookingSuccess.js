import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();
  const {
    courtName,
    bookingType,
    selectedSlots,
    selectedTime,
    totalPrice,
    totalHours,
  } = location.state || {};

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
        {bookingType === "Đặt 1 Lần" && (
          <p>
            <strong>Thời gian:</strong> {selectedTime}
          </p>
        )}
        {bookingType === "Đặt Tổng Số Giờ" && (
          <p>
            <strong>Tổng số giờ:</strong> {totalHours} giờ
          </p>
        )}
        {bookingType === "Đặt Lịch Tháng" && (
          <p>
            <strong>Thời gian:</strong>{" "}
            {selectedSlots.map((slot, index) => (
              <span key={index}>
                {slot.day} {slot.time}
                {index < selectedSlots.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
        <p>
          <strong>Tổng giá tiền:</strong> {totalPrice.toLocaleString()} VNĐ
        </p>
      </div>
    </div>
  );
};

export default BookingSuccess;
