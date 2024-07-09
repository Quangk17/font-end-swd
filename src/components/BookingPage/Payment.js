import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = ({ bookingMode }) => {
  const [hours, setHours] = useState(1);
  const navigate = useNavigate();

  const courtName = "ShuttleX Quận 1";
  const bookingType =
    bookingMode === "total_hours" ? "Đặt theo số giờ" : "Đặt theo khung giờ";
  const selectedTime =
    bookingMode === "total_hours" ? `Số giờ: ${hours}` : "Khung giờ: 7:00-7:30";
  const totalPrice = bookingMode === "total_hours" ? hours * 100000 : 100000;

  const handlePayment = () => {
    navigate("/booking/success", {
      state: {
        courtName,
        bookingType,
        selectedTime,
        totalPrice,
      },
    });
  };

  const goBack = () => {
    navigate("/booking");
  };

  return (
    <div className="payment">
      <h2>Thanh Toán</h2>
      <div className="booking-details">
        <p>
          <strong>Sân đã chọn:</strong> {courtName}
        </p>
        <p>
          <strong>Loại hình đặt sân:</strong> {bookingType}
        </p>
        {bookingMode === "total_hours" && (
          <p>
            <strong>Thời gian:</strong> {selectedTime}
          </p>
        )}
        <p>
          <strong>Tổng giá tiền:</strong> {totalPrice.toLocaleString()} VND
        </p>
      </div>
      {bookingMode === "total_hours" && (
        <div className="hour-selection">
          <label>Chọn Số Giờ: </label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            min="1"
          />
        </div>
      )}
      <div className="buttons">
        <button onClick={handlePayment}>Xác Nhận Thanh Toán</button>
        <button onClick={goBack}>Quay Lại</button>
      </div>
    </div>
  );
};

export default Payment;
