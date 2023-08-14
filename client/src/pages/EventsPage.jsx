import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />

          <div className="w-[90%] mx-auto">
            {allEvents.map((event) => (
              <EventCard key={event._id} active={true} data={event} />
            ))}{" "}
          </div>

          {allEvents.length === 0 && (
            <div className="h-[50vh] w-full">
              <h1 className="text-center font-[500] text-[30px] pt-20 ">
                No Active Events Found !
              </h1>
            </div>
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default EventsPage;
