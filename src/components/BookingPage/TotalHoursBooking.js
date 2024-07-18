import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TotalHoursBooking.css";

const TotalHoursBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [totalHours, setTotalHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [courtName, setCourtName] = useState("");

  useEffect(() => {
    const fetchCourtName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5236/api/Store/ViewAllStore`
        );
        if (response.data && response.data.success) {
          const store = response.data.data.find(
            (store) => store.id === parseInt(id)
          );
          if (store) {
            setCourtName(store.name);
          } else {
            setCourtName("ShuttleX Quận 1");
          }
        } else {
          console.error("Failed to fetch court data:", response.data.message);
          setCourtName("ShuttleX Quận 1");
        }
      } catch (error) {
        console.error("Error fetching court data:", error);
        setCourtName("ShuttleX Quận 1");
      }
    };

    fetchCourtName();
  }, [id]);

  const calculatePrice = () => {
    const pricePerHour = 100000;
    const price = totalHours * pricePerHour;
    setTotalPrice(price);
  };

  const handleConfirmBooking = () => {
    navigate("/booking/paymenttotalhours", {
      state: {
        totalHours,
        totalPrice,
        courtName,
      },
    });
  };

  return (
    <div className="total-hours-booking">
      <h2>Đặt Tổng Số Giờ</h2>
      <div className="court-details">
        <p>Sân đã chọn: {courtName}</p>
      </div>
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
          <p>Giá tiền: {totalPrice.toLocaleString()} VND</p>
          <button onClick={handleConfirmBooking}>Xác nhận và Thanh toán</button>
        </div>
      )}
    </div>
  );
};

export default TotalHoursBooking;
