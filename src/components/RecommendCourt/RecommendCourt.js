import React from 'react';
import './RecommendCourt.css';
import court1Image from '../../assets/images/court1.webp';
import court2Image from '../../assets/images/court2.jpg';
import court3Image from '../../assets/images/court3.jpg';

function RecommendCourt() {
  const recommendedCourts = [
    {
      name: 'Chi Nhánh 1',
      address: 'Quận 1',
      image: court1Image,
      hours: '6:00 AM - 10:00 PM'
    },
    {
      name: 'Chi Nhánh 2',
      address: 'Quận 2',
      image: court2Image,
      hours: '6:00 AM - 10:00 PM'
    },
    {
      name: 'Chi Nhánh 3',
      address: 'Quận 3',
      image: court3Image,
      hours: '6:00 AM - 10:00 PM'
    }
  ];

  return (
    <section id="recommend">
      <div className="recommend-container">
        <h2>Đề Xuất</h2>
        <div className="recommend-grid">
          {recommendedCourts.map((court, index) => (
            <div className="recommend-card" key={index}>
              <img src={court.image} alt={court.name} className="recommend-image" />
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