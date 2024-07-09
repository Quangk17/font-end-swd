import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MonthlyBooking.css";

const daysOfWeek = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật",
];

const timeSlots = [];
for (let i = 7; i < 22; i++) {
  timeSlots.push(`${i}:00-${i}:30`);
  timeSlots.push(`${i}:30-${i + 1}:00`);
}

const bookingData = [
  { day: "Thứ 2", time: "7:00-7:30", status: "booked" },
  { day: "Thứ 5", time: "19:00-19:30", status: "booked" },
];

const MonthlyBooking = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const navigate = useNavigate();

  const handleSlotClick = (day, time) => {
    const slot = { day, time };
    const isSelected = selectedSlots.some(
      (selectedSlot) => selectedSlot.day === day && selectedSlot.time === time
    );

    if (isSelected) {
      setSelectedSlots(
        selectedSlots.filter(
          (selectedSlot) =>
            selectedSlot.day !== day || selectedSlot.time !== time
        )
      );
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleConfirmBooking = () => {
    navigate("/booking/payment", { state: { selectedSlots } });
  };

  return (
    <div className="monthly-booking">
      <h2>Chọn Khung Giờ Đặt Sân Trong Tháng</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot) => (
            <tr key={slot}>
              <td>{slot}</td>
              {daysOfWeek.map((day) => {
                const booking = bookingData.find(
                  (b) => b.day === day && b.time === slot
                );
                const isBooked = booking && booking.status === "booked";
                const isSelected = selectedSlots.some(
                  (selectedSlot) =>
                    selectedSlot.day === day && selectedSlot.time === slot
                );

                return (
                  <td
                    key={day + slot}
                    className={`${
                      isBooked
                        ? "booked"
                        : isSelected
                        ? "selected"
                        : "available"
                    }`}
                    onClick={() => !isBooked && handleSlotClick(day, slot)}
                  >
                    {!isBooked
                      ? isSelected
                        ? "100.000VNĐ"
                        : "100.000VNĐ"
                      : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleConfirmBooking}
        disabled={selectedSlots.length === 0}
      >
        Xác nhận đặt sân
      </button>
    </div>
  );
};

export default MonthlyBooking;
