import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./Payment.css";

const PaymentMonthly = () => {
  const [courtName, setCourtName] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

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

  useEffect(() => {
    if (location.state && location.state.selectedSlots) {
      setSelectedSlots(location.state.selectedSlots);
      setTotalPrice(location.state.selectedSlots.length * 50000);
    }
  }, [location.state]);

  const bookingType = "Đặt Lịch Tháng";

  const handlePayment = async () => {
    const bookingData = {
      bookingName: "Monthly",
      description: "string",
      bookingDate: new Date().toISOString(),
      price: totalPrice,
      userID: 3,
      bookingTypeID: 4,
      bookingDetailParentCreateDTO: {
        isActive: true,
        date: new Date().toISOString(),
        name: "string",
        amountHour: 0,
        bookingID: 0,
        scheduleID: 14,
        courtID: 6,
        slotID: 3,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5236/api/Bookings/CreateBooking",
        bookingData
      );
      if (response.data && response.data.success) {
        navigate("/booking/success", {
          state: {
            courtName,
            bookingType,
            selectedSlots,
            totalPrice,
          },
        });
      } else {
        console.error("Failed to create booking:", response.data.message);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
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
          <strong>Thời gian:</strong>{" "}
          {selectedSlots.map((slot, index) => (
            <span key={index}>
              {slot.day} {slot.time}
              {index < selectedSlots.length - 1 && ", "}
            </span>
          ))}
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

export default PaymentMonthly;
