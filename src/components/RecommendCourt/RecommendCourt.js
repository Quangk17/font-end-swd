import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecommendCourt.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

const imageMap = [court1Image, court2Image, court3Image];

function RecommendCourt() {
  const [recommendedCourts, setRecommendedCourts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5236/api/Store/ViewAllStore"
        );
        const courts = response.data.data.slice(0, 3).map((court, index) => ({
          ...court,
          image: imageMap[index % imageMap.length],
          hours: "7:00 AM - 10:00 PM",
        }));
        setRecommendedCourts(courts);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch recommended courts. Please try again later.");
        setLoading(false);
      }
    };

    fetchCourts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="recommend">
      <div className="recommend-container">
        <h2>Đề Xuất</h2>
        <div className="recommend-grid">
          {recommendedCourts.map((court) => (
            <div className="recommend-card" key={court.id}>
              <img
                src={court.image}
                alt={court.name}
                className="recommend-image"
              />
              <div className="recommend-info">
                <h3>{court.name}</h3>
                <p>{court.address}</p>
                <p>{court.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendCourt;
