import { useState, useEffect } from "react";

function GetInvolved() {
  const [announcements, setAnnouncements] = useState<
    {
      heading: string;
      body: string;
    }[]
  >([]);

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  function fetchAnnouncement() {
    fetch(
      "https://neuroscienceclubbackend-production.up.railway.app/announcement",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status != 200) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAnnouncements(data.announcements);
      });
  }

  return (
    <>
      <section className="container-fluid GetInvolved">
        <div className="row align-items-center Membership">
          <div className="col-md-6 text-center my-md-5 py-md-3 pt-3 px-5">
            <h2 className="h2">Become a Member</h2>
            <p className="normalText my-4">
              Join our community to access exclusive benefits, connect with
              like-minded individuals, and make a lasting impact.
            </p>
          </div>
          <div className="col-md-6 text-center my-md-3 py-4 my-lg-0">
            <a href="https://go.sfss.ca/clubs/919/info">
              <button className="btn btn-lg btn-secondary">Join Us!</button>
            </a>
          </div>
        </div>
        <div className="container my-5 Oppurtunity">
          <h2 className="text-center mb-4 pb-3">Featured Opportunities</h2>
          <div className="row">
            {announcements.length === 0 ? (
              <p className="errormsg mb-5 mt-3">
                Looks like there are no opportunities available right now. Stay
                tuned for updates!
              </p>
            ) : (
              announcements.map((announcement, index) => (
                <div key={index} className="col-12 mb-4">
                  <a href={"https://www.google.com"}>
                    <div className="d-flex justify-content-between align-items-center p-4 lol">
                      <div>
                        <h4>{announcement.heading}</h4>
                        <p>{announcement.body}</p>
                      </div>
                      {/* <img
                        src={announcement.image}
                        alt={announcement.heading}
                        className="img-fluid"
                        style={{ width: "150px", height: "auto" }}
                      /> */}
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInvolved;
