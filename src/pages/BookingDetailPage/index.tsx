import React from "react";
import "./BookingDetail.scss";
import { IBooking } from "@/types";
import { Link, useParams } from "react-router-dom";
import { useEventBookingContext } from "@/contexts/EventBookingContext";

const BookingDetail: React.FC = () => {
  const { bookings } = useEventBookingContext();
  const { bookingId } = useParams();

  const bookingDetail = bookings.find(
    (event: IBooking) => event.id === bookingId
  );

  if (!bookingDetail?.id) {
    return <div>No results</div>;
  }

  return (
    <div className="booking-detail">
      <p>
        {" "}
        Hi <b>{bookingDetail.userName}</b>,
      </p>
      <p> Thank you for using our booking service !</p>
      <p> Here is your booking detail:</p>
      <p className="event-name">
        name: <b>{bookingDetail?.title}</b>
      </p>
      <p className="event-date">
        time: {bookingDetail?.schedule} {bookingDetail?.date}
      </p>
      <p>
        location: <b>{bookingDetail?.location}</b>
      </p>
      <p>
        ticket type: <b>{bookingDetail?.ticketType}</b>
      </p>
      <div>
        <img src={bookingDetail?.image || ""} alt={bookingDetail?.title} />
      </div>
      <p>
        Hope you have a great time with this event !{" "}
        <Link to="/"> View more our events in here</Link>
      </p>
    </div>
  );
};

export default BookingDetail;
