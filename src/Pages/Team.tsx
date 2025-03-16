import "./styles.css";
import { useState, useEffect } from "react";

function Team() {
  // const teamMembers = [
  //   { Name: "Hanko Ngu", Position: "Co-President" },
  //   { Name: "Maria Kapitanenko", Position: "Co-President" },
  //   { Name: "AbbyGale", Position: "VP of Marketing" },
  //   { Name: "Jessica Singh", Position: "VP of Internal" },
  // ];

  const [teamMembers, setTeamMembers] = useState<
    {
      first_name: string;
      last_name: string;
      email: string;
      pronouns: string;
      stream: string;
      position: string;
      socialID: string;
      profilePic?: string;
      info: string;
      Linkedin?: string;
      Instagram?: string;
      Twitter?: string;
    }[]
  >([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  function fetchTeam() {
    fetch("https://neuroscienceclubbackend-production.up.railway.app/execs", {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTeamMembers(data.execs);
      });
  }

  return (
    <>
      <section className="container-fluid Team mt-5 pt-5">
        <h1>Meet Our Team</h1>
        <section className="container-fluid py-5">
          <div className="row align-items-center">
            {teamMembers.map((member) => (
              <div
                key={member.first_name}
                className="col-lg-3 col-md-4 col-6 mt-4"
              >
                <img
                  className="img-fluid d-block mx-auto"
                  src={member.profilePic}
                  id="teamphotos"
                />
                <div className="text-center teamMember mt-3">
                  <h1>{member.first_name}</h1>
                  <h2>{member.position}</h2>
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
