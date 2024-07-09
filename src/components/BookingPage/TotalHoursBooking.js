import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TotalHoursBooking.css";

const TotalHoursBooking = () => {
  const [totalHours, setTotalHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const pricePerHour = 100000;
    const price = totalHours * pricePerHour;
    setTotalPrice(price);
  };

  return (
    <div className="total-hours-booking">
      <h2>Đặt Tổng Số Giờ</h2>
      <div className="input-section">
        <label>Nhập số giờ muốn đặt:</label>
        <input
          type="number"
          value={totalHours}
          onChange={(e) => setTotalHours(Number(e.target.value))}
        />
        <button onClick={calculatePrice}>Tính Giá Tiền</button>
      </div>
      {totalPrice > 0 && (
        <div className="price-section">
          <p>Giá tiền: {totalPrice} VND</p>
          <Link to="/booking/payment">Xác nhận và Thanh toán</Link>
        </div>
      )}
    </div>
  );
};

export default TotalHoursBooking;
