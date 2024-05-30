import React, { useState } from 'react';
import './Search.css';
import court1Image from '../../assets/images/court1.webp';
import court2Image from '../../assets/images/court2.jpg';

function Search({ onSearch }) {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!location) {
      setError('Vui lòng chọn khu vực.');
      return;
    }

    setError('');
    const searchResults = [
      {
        court: 'Chi Nhánh 1',
        address: 'Quận 1',
        location,
        date,
        time,
        image: court1Image,
        hours: '6:00 AM - 10:00 PM'
      },
      {
        court: 'Chi Nhánh 2',
        address: 'Quận 2',
        location,
        date,
        time,
        image: court2Image,
        hours: '6:00 AM - 10:00 PM'
      }
    ];

    onSearch(searchResults);
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
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled>
                Chọn quận/huyện
              </option>
              <option value="District 1">Quận 1</option>
              <option value="District 2">Quận 2</option>
              <option value="District 3">Quận 3</option>
              <option value="District 4">Quận 4</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Ngày:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time">Giờ:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button type="submit">Tìm kiếm</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
}

export default Search;