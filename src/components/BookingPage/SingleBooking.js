import React from "react";
import { Link } from "react-router-dom";
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
                return (
                  <td
                    key={day + slot}
                    className={isBooked ? "booked" : "available"}
                  >
                    {!isBooked ? (
                      <Link to={`/booking/payment?day=${day}&time=${slot}`}>
                        100.000VNĐ
                      </Link>
                    ) : (
                      ""
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleBooking;
