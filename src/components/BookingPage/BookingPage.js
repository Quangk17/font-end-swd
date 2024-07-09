import React from "react";
import { Routes, Route } from "react-router-dom";
import ChooseStore from "./ChooseStore";
import ChooseBookingType from "./ChooseBookingType";
import Payment from "./Payment";
import BookingSuccess from "./BookingSuccess";
import TotalHoursBooking from "./TotalHoursBooking";
import SingleBooking from "./SingleBooking";
import MonthlyBooking from "./MonthlyBooking";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <div className="booking-page">
      <Routes>
        <Route path="/" element={<ChooseStore />} />
        <Route path="/choose-booking-type" element={<ChooseBookingType />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/total-hours" element={<TotalHoursBooking />} />
        <Route path="/single" element={<SingleBooking />} />
        <Route path="/monthly" element={<MonthlyBooking />} />
      </Routes>
    </div>
  );
};

export default BookingPage;
