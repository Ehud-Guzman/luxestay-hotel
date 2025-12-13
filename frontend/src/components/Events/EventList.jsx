import EventCard from "./EventCard";

export default function EventList({ events }) {
  if (!events.length)
    return <p className="text-center text-brand-ivory/80 col-span-full">No events match your criteria.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
}
