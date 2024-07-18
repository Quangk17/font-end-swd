import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import court2Image from "../../assets/images/court2.jpg";

function Search({ onSearch }) {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5236/api/Store/ViewAllStore"
      );
      const filteredDistricts = response.data.data
        .filter((item) => !item.isDeleted)
        .map((item) => ({
          value: item.name,
          label: item.name.replace("ShuttleX ", ""),
        }));
      setDistricts(filteredDistricts);
    } catch (error) {
      console.error("Error fetching districts", error);
      setError("Không tải được danh sách quận.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!location) {
      setError("Vui lòng chọn khu vực.");
      return;
    }

    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5236/api/Store/SearchStoreByName?name=${encodeURIComponent(
          location
        )}`
      );
      const searchResults = response.data.data.map((item) => ({
        id: item.id,
        court: item.name,
        address: item.address,
        status: item.status,
        timeActive: item.timeActive,
        image: court2Image,
      }));
      onSearch(searchResults);
    } catch (error) {
      console.error("Error fetching search results", error);
      setError("Không tìm thấy sân.");
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <section id="search">
      <div className="search-container">
        <h2>Tìm Sân</h2>
        <form id="searchForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="location">Khu vực:</label>
            <select
              id="location"
              name="location"
              required
              value={location}
              onChange={handleLocationChange}
            >
              <option value="" disabled>
                Chọn quận/huyện
              </option>
              {districts.map((district, index) => (
                <option key={index} value={district.value}>
                  {district.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Tìm kiếm</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
}

export default Search;
