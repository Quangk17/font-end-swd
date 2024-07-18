import React from "react";
import { Routes, Route } from "react-router-dom";
import ChooseStore from "./ChooseStore";
import ChooseBookingType from "./ChooseBookingType";
import Payment from "./Payment";
import PaymentSingle from "./PaymentSingle";
import PaymentMonthly from "./PaymentMonthly";
import PaymentTotalHours from "./PaymentTotalHours";
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
        <Route
          path="/choose-booking-type/:id"
          element={<ChooseBookingType />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentsingle/:id" element={<PaymentSingle />} />
        <Route path="/paymentmonthly/:id" element={<PaymentMonthly />} />
        <Route path="/paymenttotalhours" element={<PaymentTotalHours />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/total-hours/:id" element={<TotalHoursBooking />} />
        <Route path="/single/:id" element={<SingleBooking />} />
        <Route path="/monthly/:id" element={<MonthlyBooking />} />
      </Routes>
    </div>
  );
};

export default BookingPage;
