import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./StoreDetail.css";

const sampleStores = [
  {
    id: 1,
    name: "ShuttleX Quận 1",
    address: "123 Đường ABC, Quận 1, TP. HCM",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "ShuttleX Quận 2",
    address: "456 Đường XYZ, Quận 2, TP. HCM",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 3,
    name: "ShuttleX Quận 3",
    address: "789 Đường LMN, Quận 3, TP. HCM",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "ShuttleX Quận Gò Vấp",
    address: "123 Đường ABC, Quận Gò Vấp, TP. HCM",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 5,
    name: "ShuttleX Quận 10",
    address: "456 Đường XYZ, Quận 10, TP. HCM",
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 6,
    name: "ShuttleX Quận Bình Thạnh",
    address: "789 Đường LMN, Quận Bình Thạnh, TP. HCM",
    hours: "7:00 AM - 10:00 PM",
  },
];

const StoreDetail = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const storeData = sampleStores.find((store) => store.id === parseInt(id));
    setStore(storeData);
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  const timeSlots = [];
  for (let i = 7; i < 22; i++) {
    timeSlots.push(`${i}:00-${i}:30`);
    timeSlots.push(`${i}:30-${i + 1}:00`);
  }

  const daysOfWeek = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ Nhật",
  ];

  const bookingData = [
    { day: "Thứ 2", time: "7:00-7:30", status: "booked" },
    { day: "Thứ 5", time: "19:00-19:30", status: "booked" },
  ];

  return (
    <div className="store-detail-container">
      <div className="store-info-card">
        <div className="store-info">
          <h2>{store.name}</h2>
          <p>
            <strong>Giờ hoạt động:</strong> {store.hours}
          </p>
          <p>
            <strong>Địa chỉ:</strong> {store.address}
          </p>
        </div>
      </div>
      <div className="booking-info-card">
        <div className="store-booking">
          <h2>Lịch Đặt Sân</h2>
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
                          <Link to={`/booking?day=${day}&time=${slot}`}></Link>
                        ) : (
                          " "
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
