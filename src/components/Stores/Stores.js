import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Stores.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(
          "http://localhost:5236/api/Store/ViewAllStore"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        const filteredStores = result.data
          .filter((store) => !store.isDeleted)
          .map((store, index) => ({
            id: store.id,
            name: store.name,
            address: store.address,
            hours: "7:00 AM - 10:00 PM",
            imageUrl: [court1Image, court2Image, court3Image][index % 3],
          }));

        setStores(filteredStores);
      } catch (error) {
        setError("Có lỗi xảy ra khi tải dữ liệu cửa hàng.");
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleStoreClick = (id) => {
    navigate(`/storedetail/${id}`);
  };

  return (
    <section id="recommend">
      <div className="stores-container">
        <h2>Danh Sách Sân</h2>
        <div className="stores-grid">
          {stores.map((store) => (
            <div
              key={store.id}
              className="store-card"
              onClick={() => handleStoreClick(store.id)}
            >
              <img
                src={store.imageUrl}
                alt={store.name}
                className="store-image"
              />
              <div className="store-info">
                <h3>{store.name}</h3>
                <p>{store.address}</p>
                <p>{store.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;
