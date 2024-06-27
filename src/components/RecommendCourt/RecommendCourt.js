import React from "react";
import "./RecommendCourt.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

function RecommendCourt() {
  const recommendedCourts = [
    {
      name: "ShuttleX Quận 1",
      address: "123 Đường ABC, Quận 1, TP. HCM",
      image: court1Image,
      hours: "6:00 AM - 10:00 PM",
    },
    {
      name: "ShuttleX Quận 2",
      address: "456 Đường XYZ, Quận 2, TP. HCM",
      image: court2Image,
      hours: "6:00 AM - 10:00 PM",
    },
    {
      name: "ShutlteX 3",
      address: "789 Đường LMN, Quận 3, TP. HCM",
      image: court3Image,
      hours: "6:00 AM - 10:00 PM",
    },
  ];

  // const [recommendedCourts, setRecommendedCourts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchCourts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5236/api/Store/ViewAllStore"
  //       );
  //       setRecommendedCourts(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Failed to fetch recommended courts. Please try again later.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourts();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <section id="recommend">
      <div className="recommend-container">
        <h2>Đề Xuất</h2>
        <div className="recommend-grid">
          {recommendedCourts.map((court, index) => (
            <div className="recommend-card" key={index}>
              <img
                src={court.image}
                alt={court.name}
                className="recommend-image"
              />
              <div className="recommend-info">
                <h3>{court.name}</h3>
                <p>{court.address}</p>
                <p>Giờ: {court.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendCourt;
