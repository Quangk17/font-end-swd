import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";

const PaymentTotalHours = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalHours, totalPrice, courtName } = location.state || {};

  if (!totalHours || !totalPrice || !courtName) {
    return <div>Không có dữ liệu đặt sân.</div>;
  }

  const bookingType = "Đặt Tổng Số Giờ";

  const handlePayment = () => {
    navigate("/booking/success", {
      state: {
        courtName,
        bookingType,
        totalHours,
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
        <p>
          <strong>Tổng số giờ:</strong> {totalHours} giờ
        </p>
        <p>
          <strong>Tổng giá tiền:</strong> {totalPrice.toLocaleString()} VNĐ
        </p>
      </div>
      <div className="buttons">
        <button onClick={handlePayment}>Xác Nhận Thanh Toán</button>
        <button onClick={goBack}>Quay Lại</button>
      </div>
    </div>
  );
};

export default PaymentTotalHours;
