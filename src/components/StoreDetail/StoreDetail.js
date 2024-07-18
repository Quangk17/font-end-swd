import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./StoreDetail.css";

const StoreDetail = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5236/api/Store/ViewAllStore`
        );
        const stores = response.data.data;
        const selectedStore = stores.find((s) => s.id === parseInt(id));
        if (selectedStore) {
          setStore(selectedStore);

          const mockBookingData = [
            { day: "Thứ 2", time: "7:00-7:30", status: "booked" },
            { day: "Thứ 5", time: "19:00-19:30", status: "booked" },
          ];
          setBookingData(mockBookingData);
        } else {
          console.error(`Không tìm thấy cửa hàng với id ${id}`);
        }
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin cửa hàng:", error);
        setLoading(false);
      }
    };

    fetchStoreDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!store) {
    return <div>Không tìm thấy thông tin cửa hàng</div>;
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

  return (
    <div className="store-detail-container">
      <div className="store-info-sidebar">
        <div className="store-info">
          <h2>{store.name}</h2>
          <p>
            <strong>Giờ hoạt động:</strong> 7:00 AM - 10:00 PM
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
                <th>Thời gian</th>
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
                        {!isBooked ? "50.000VNĐ" : ""}
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
