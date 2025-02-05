import "./styles.css";
import Eventimg from "./Pictures/homeGroupImg.jpg";
import { useState } from "react";

function Events() {
  const [view, setView] = useState("Upcoming");
  const upcomingEvents = [
    { id: 1, title: "Upcoming Event 1", description: "Details about event 1" },
    { id: 2, title: "Upcoming Event 2", description: "Details about event 2" },
    { id: 3, title: "Upcoming Event 3", description: "Details about event 3" },
  ];
  const pastEvents = [
    { id: 1, title: "Past Event 1", description: "Details about event 1" },
    { id: 2, title: "Past Event 2", description: "Details about event 2" },
    { id: 3, title: "Past Event 3", description: "Details about event 3" },
  ];
  return (
    <>
      <section className="container-fluid Events">
        <h2>
          Join us at our next <b>EVENT!</b>
        </h2>
        <div className="EventsTime">
          <a
            href="#"
            className={`time ${view === "Upcoming" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              setView("Upcoming"); // Set to show upcoming events
            }}
          >
            Upcoming
          </a>
          <a
            href="#"
            className={` mx-4 time ${view === "Past" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setView("Past"); // Set to show past events
            }}
          >
            Past
          </a>
        </div>
        <div className="row align-items-center py-5">
          {(view === "Upcoming" ? upcomingEvents : pastEvents).map((event) => (
            <div key={event.id} className="event d-block mx-auto col-lg-4">
              <div className="card">
                <img
                  src={Eventimg}
                  className="card-img-top"
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
