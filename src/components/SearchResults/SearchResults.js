import React from "react";
import "./SearchResults.css";

function SearchResults({ results }) {
  const filteredResults = results.filter((result) => !result.isDeleted);

  return (
    <section id="searchResults">
      <div className="results-container">
        {filteredResults.map((result, index) => (
          <div className="result-card" key={index}>
            <img
              src={result.image}
              alt={result.court}
              className="result-image"
            />
            <div className="result-info">
              <h3>{result.court}</h3>
              <p>{result.address}</p>
              {result.hours && <p>{result.hours}</p>}
              {result.date && <p>Ngày: {result.date}</p>}
              {result.time && <p>Giờ: {result.time}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
