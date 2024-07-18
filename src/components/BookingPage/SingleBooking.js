import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleBooking.css";

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

const SingleBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSlotClick = (day, time) => {
    const slot = { day, time };
    if (
      selectedSlot &&
      selectedSlot.day === day &&
      selectedSlot.time === time
    ) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slot);
    }
  };

  const handleConfirmBooking = () => {
    navigate(`/booking/paymentsingle/${id}`, { state: { selectedSlot } });
  };

  return (
    <div className="single-booking">
      <h2>Chọn Khung Giờ Đặt Sân</h2>
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
                const isSelected =
                  selectedSlot &&
                  selectedSlot.day === day &&
                  selectedSlot.time === slot;

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
                    {!isBooked ? (isSelected ? "50.000VNĐ" : "50.000VNĐ") : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleConfirmBooking} disabled={!selectedSlot}>
        Xác nhận đặt sân
      </button>
    </div>
  );
};

export default SingleBooking;
