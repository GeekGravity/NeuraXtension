import "./styles.css";
import Eventimg from "./Pictures/homeGroupImg.jpg";
import { useState } from "react";

function Events() {
  const [history, setHistory] = useState("Upcoming");

  return (
    <>
      <section className="container-fluid Events">
        <h2>
          Join us at our next <b>EVENT!</b>
        </h2>
        <div className="EventsTime">
          <a
            href="#"
            className={`time ${history === "Upcoming" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              setHistory("Upcoming"); // Set to show upcoming events
            }}
          >
            Upcoming
          </a>
          <a
            href="#"
            className={` mx-4 time ${history === "Past" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setHistory("Past"); // Set to show past events
            }}
          >
            Past
          </a>
        </div>
        <div className="row align-items-center py-5">
          {(history === "Upcoming" ? upcomingEvents : pastEvents).map(
            (event) => (
              <div
                key={event.id}
                className="event d-block mx-auto py-3 col-sm-6 col-lg-4"
              >
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
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Events;
