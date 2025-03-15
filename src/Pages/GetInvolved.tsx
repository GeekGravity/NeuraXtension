function GetInvolved() {
  const opportunities = [
    {
      title: "Leadership Program",
      description:
        "Gain hands-on leadership experience and mentorship opportunities.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      title: "Volunteer Opportunities",
      description: "Give back to the community and develop essential skills.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      title: "Networking Events",
      description: "Meet professionals and expand your connections.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
  ];

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
            {opportunities.map((opportunity, index) => (
              <div key={index} className="col-12 mb-4">
                <a href={opportunity.link}>
                  <div className="d-flex justify-content-between align-items-center p-4 lol">
                    <div>
                      <h4>{opportunity.title}</h4>
                      <p>{opportunity.description}</p>
                    </div>
                    <img
                      src={opportunity.image}
                      alt={opportunity.title}
                      className="img-fluid"
                      style={{ width: "150px", height: "auto" }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInvolved;
