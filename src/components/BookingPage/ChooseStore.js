import React from "react";
import { Link } from "react-router-dom";
import "./ChooseStore.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

const courts = [
  {
    id: 1,
    name: "ShuttleX Quận 1",
    address: "123 Đường ABC, Quận 1, TP. HCM",
    imageUrl: court1Image,
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "ShuttleX Quận 2",
    address: "456 Đường XYZ, Quận 2, TP. HCM",
    imageUrl: court2Image,
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 3,
    name: "ShuttleX Quận 3",
    address: "789 Đường LMN, Quận 3, TP. HCM",
    imageUrl: court3Image,
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "ShuttleX Quận Gò Vấp",
    address: "123 Đường ABC, Quận Gò Vấp, TP. HCM",
    imageUrl: court2Image,
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 5,
    name: "ShuttleX Quận 10",
    address: "456 Đường XYZ, Quận 10, TP. HCM",
    imageUrl: court3Image,
    hours: "7:00 AM - 10:00 PM",
  },
  {
    id: 6,
    name: "ShuttleX Quận Bình Thạnh",
    address: "789 Đường LMN, Quận Bình Thạnh, TP. HCM",
    imageUrl: court1Image,
    hours: "7:00 AM - 10:00 PM",
  },
];

const ChooseStore = ({ onSelectCourt }) => {
  return (
    <div className="choose-store">
      <h2>Chọn Sân</h2>
      <div className="store-list">
        {courts.map((court) => (
          <div key={court.id} className="store-card">
            <Link
              to="/booking/choose-booking-type"
              onClick={() => onSelectCourt(court)}
            >
              <img src={court.imageUrl} alt={court.name} />
              <h3>{court.name}</h3>
              <p>{court.address}</p>
              <p>{court.hours}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseStore;
