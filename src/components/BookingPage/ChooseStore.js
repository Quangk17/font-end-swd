import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ChooseStore.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

const ChooseStore = ({ onSelectCourt }) => {
  const [fetchedCourts, setFetchedCourts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5236/api/Store/ViewAllStore"
        );
        if (response.data && response.data.success) {
          const mappedCourts = response.data.data
            .filter((court) => !court.isDeleted)
            .map((court, index) => ({
              id: court.id,
              name: court.name,
              address: court.address,
              hours: "7:00 AM - 10:00 PM",
              imageUrl: [court1Image, court2Image, court3Image][index % 3],
            }));
          setFetchedCourts(mappedCourts);
        } else {
          console.error("Failed to fetch data:", response.data.message);
          setError("Failed to fetch data from server.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("There was an error loading court data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourts();
  }, []);

  const handleSelectCourt = (court) => {
    if (typeof onSelectCourt === "function") {
      onSelectCourt(court);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="choose-store">
      <h2>Chọn Sân</h2>
      <div className="store-list">
        {fetchedCourts.map((court) => (
          <div key={court.id} className="store-card">
            <Link
              to={{
                pathname: `/booking/choose-booking-type/${court.id}`,
                state: { selectedCourt: court.name },
              }}
              onClick={() => handleSelectCourt(court)}
            >
              <img src={court.imageUrl} alt={court.name} />
              <div className="store-info">
                <h3>{court.name}</h3>
                <p>{court.address}</p>
                <p>7:00 AM - 10:00 PM</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseStore;
