import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchResults.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

const imageMap = [court1Image, court2Image, court3Image];

function SearchResults({ results }) {
  const navigate = useNavigate();
  console.log("Results:", results);

  const filteredResults = results.filter((result) => !result.isDeleted);

  const handleResultClick = (id) => {
    navigate(`/storedetail/${id}`);
  };

  return (
    <section id="searchResults">
      <div className="results-container">
        {filteredResults.length === 0 ? (
          <p>Không tìm thấy thông tin cửa hàng</p>
        ) : (
          filteredResults.map((result, index) => (
            <div
              className="result-card"
              key={result.id}
              onClick={() => handleResultClick(result.id)}
            >
              <img
                src={imageMap[index % imageMap.length]}
                alt={result.court}
                className="result-image"
              />
              <div className="result-info">
                <h3>{result.court}</h3>
                <p>{result.address}</p>
                <p>7:00 AM - 10:00 PM</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default SearchResults;
