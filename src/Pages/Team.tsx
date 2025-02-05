import "./styles.css";
import team from "./Pictures/logo.png";

function Team() {
  return (
    <>
      <section className="container-fluid Team">
        <h1>Meet Our Team</h1>
        <section className="container-fluid mt-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Hanko Ng</h1>
                <h2>Co-President</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Maria Kapitanenko</h1>
                <h2>Co-President</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Sophie Bel</h1>
                <h2>VP of Finance</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Navraj Khattra</h1>
                <h2>VP of Education</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid pb-5">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Jessica Singh</h1>
                <h2>VP of Internal</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Mathews Jaison</h1>
                <h2>VP of Innovations</h2>
              </div>
            </div>
            <div className="col-lg-3 ">
              <img
                className="img-fluid d-block mx-auto"
                src={team}
                id="teamphotos"
              />
              <div className="text-center teamTitles">
                <h1>Abbygale</h1>
                <h2>VP of Maketing</h2>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default Team;
