import React from 'react';
import './SearchResults.css';

function SearchResults({ results }) {
  return (
    <section id="searchResults">
      <div className="results-container">
        {results.map((result, index) => (
          <div className="result-card" key={index}>
            <img src={result.image} alt={result.court} className="result-image" />
            <div className="result-info">
              <h3>{result.court}</h3>
              <p>{result.address}</p>
              <p>{result.hours}</p>
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