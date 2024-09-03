import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { useEventBookingContext } from '@/contexts/EventBookingContext';
import { IEvent } from '@/types';
import './EventDetail.scss';
import Chip from '@/components/commons/Chip';
import BackButton from '@/components/commons/BackButton';

const EventDetail: React.FC = () => {
  const { events } = useEventBookingContext();
  const { eventId } = useParams();

  const eventDetail = events.find((event: IEvent) => event.id === eventId);

  // return when there is no event
  if (!eventDetail) {
    return <div>No event found</div>;
  }

  return (
    <>
    <BackButton />
    <div className="event-page">
      <img className="event-image" src={eventDetail.image} alt={eventDetail.title} />
      <div className='event-details'>
        <h2 className="event-title">{eventDetail.title}</h2>
        <p className="event-description">{eventDetail.description}</p>
        <p>Date: {eventDetail.date}</p>
        <p>Location: {eventDetail.location}</p>
        <p>Time: {eventDetail.schedule}</p>
        <div className="event-ticket-types">
          Ticket type: {eventDetail.ticketTypes.map((ticketType) => (
            <Chip key={ticketType} label={ticketType} />
          ))}
        </div>
        <Link to={`/booking/event/${eventDetail.id}`}> <button className="book-now-button">Book Now</button></Link>

      </div>
    </div>
    </>
  );
};

export default EventDetail;
