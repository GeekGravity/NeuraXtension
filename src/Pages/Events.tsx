import "./styles.css";
import { useState, useEffect } from "react";

interface eventype {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  bannerURL: string;
}

function Events() {
  const [history, setHistory] = useState("Upcoming");

  const [pastEvents, setpastEvents] = useState<eventype[]>([]);

  const [upcomingEvents, setupcomingEvents] = useState<eventype[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    const today = new Date();
    fetch("https://neuroscienceclubbackend-production.up.railway.app/events", {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        const past: eventype[] = [];
        const upcoming: eventype[] = [];
        console.log(data);

        data.events.forEach((event: eventype) => {
          const eventDate = new Date(event.date);
          if (eventDate > today) {
            upcoming.push(event);
          } else {
            past.push(event);
          }
        });
        setpastEvents(past);
        setupcomingEvents(upcoming);
      });
  }

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
        <div className="container-fluid">
          <div className="row align-items-stretch py-5">
            {history === "Upcoming" ? (
              upcomingEvents.length === 0 ? (
                <p className="errormsg mt-5 py-5">
                  Looks like there are no events coming up right now. Stay tuned
                  for updates!
                </p>
              ) : (
                upcomingEvents.map((event) => (
                  <div
                    key={event.name + event.date}
                    className="event d-block py-3 col-sm-6 col-lg-4"
                  >
                    <div className="card">
                      <img
                        src={event.bannerURL}
                        className="card-img-top"
                        alt={event.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{event.name}</h5>
                        <p className="card-text">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              )
            ) : (
              pastEvents.map((event) => (
                <div
                  key={event.name + event.date}
                  className="event d-block py-3 col-sm-6 col-lg-4"
                >
                  <div className="card">
                    <img
                      src={event.bannerURL}
                      className="card-img-top"
                      alt={event.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{event.name}</h5>
                      <p className="card-text">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
