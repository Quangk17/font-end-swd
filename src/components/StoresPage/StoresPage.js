import React, { useState, useEffect } from "react";
// import axios from "axios";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./StoresPage.css";
import court1Image from "../../assets/images/court1.webp";
import court2Image from "../../assets/images/court2.jpg";
import court3Image from "../../assets/images/court3.jpg";

// const StoresPage = () => {
//   const [stores, setStores] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStores = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5236/api/Store/ViewAllStore"
//         );
//         setStores(response.data);
//       } catch (error) {
//         setError("Có lỗi xảy ra khi tải dữ liệu cửa hàng.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStores();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <>
//       <header>
//         <Nav />
//         <Banner />
//       </header>
//       <div className="stores-container">
//         <h2>Danh Sách Cửa Hàng</h2>
//         <div className="stores-grid">
//           {stores.map((store) => (
//             <div className="store-card" key={store.id}>
//               <img
//                 src={store.imageUrl}
//                 alt={store.name}
//                 className="store-image"
//               />
//               <div className="store-info">
//                 <h3>{store.name}</h3>
//                 <p>{store.address}</p>
//                 <p>Giờ mở cửa: {store.hours}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default StoresPage;

const StoresPage = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        // Tạm thời sử dụng dữ liệu mẫu
        const sampleStores = [
          {
            id: 1,
            name: "ShuttleX Quận 1",
            address: "123 Đường ABC, Quận 1, TP. HCM",
            imageUrl: court1Image,
            hours: "6:00 AM - 10:00 PM",
          },
          {
            id: 2,
            name: "ShuttleX Quận 2",
            address: "456 Đường XYZ, Quận 2, TP. HCM",
            imageUrl: court2Image,
            hours: "7:00 AM - 9:00 PM",
          },
          {
            id: 3,
            name: "ShuttleX Quận 3",
            address: "789 Đường LMN, Quận 3, TP. HCM",
            imageUrl: court3Image,
            hours: "5:00 AM - 11:00 PM",
          },
          {
            id: 4,
            name: "ShuttleX Quận Gò Vấp",
            address: "123 Đường ABC, Quận Gò Vấp, TP. HCM",
            imageUrl: court2Image,
            hours: "6:00 AM - 10:00 PM",
          },
          {
            id: 5,
            name: "ShuttleX Quận 10",
            address: "456 Đường XYZ, Quận 10, TP. HCM",
            imageUrl: court3Image,
            hours: "7:00 AM - 9:00 PM",
          },
          {
            id: 6,
            name: "ShuttleX Quận Bình Thạnh",
            address: "789 Đường LMN, Quận Bình Thạnh, TP. HCM",
            imageUrl: court1Image,
            hours: "5:00 AM - 11:00 PM",
          },
        ];
        setStores(sampleStores);
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

  return (
    <>
      <header>
        <Nav />
        <Banner />
      </header>
      <div className="stores-container">
        <h2>Danh Sách Cửa Hàng</h2>
        <div className="stores-grid">
          {stores.map((store) => (
            <div className="store-card" key={store.id}>
              <img
                src={store.imageUrl}
                alt={store.name}
                className="store-image"
              />
              <div className="store-info">
                <h3>{store.name}</h3>
                <p>{store.address}</p>
                <p>Giờ mở cửa: {store.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoresPage;
