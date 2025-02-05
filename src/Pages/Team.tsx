import "./styles.css";
import team from "./Pictures/logo.png";

function Team() {
  const teamMembers = [
    { Name: "Hanko Ngu", Position: "Co-President" },
    { Name: "Maria Kapitanenko", Position: "Co-President" },
    { Name: "AbbyGale", Position: "VP of Marketing" },
    { Name: "Jessica Singh", Position: "VP of Internal" },
  ];

  return (
    <>
      <section className="container-fluid Team mt-5 pt-5">
        <h1>Meet Our Team</h1>
        <section className="container-fluid py-5">
          <div className="row align-items-center">
            {teamMembers.map((member) => (
              <div key={member.Name} className="col-lg-3 col-md-4 col-6 mt-4">
                <img
                  className="img-fluid d-block mx-auto"
                  src={team}
                  id="teamphotos"
                />
                <div className="text-center teamMember mt-3">
                  <h1>{member.Name}</h1>
                  <h2>{member.Position}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
export default Team;
