import "./styles.css";
import aboutus from "./Pictures/About-us.jpg";
import Team from "./Team";

function Mission() {
  return (
    <>
      <div className=" MissionBox">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className="img-fluid d-block" src={aboutus} id="aboutUsPic" />
          </div>
          <div className="col-lg-6 text-center my-5 py-3 my-lg-0">
            <div className="row justify-content-center">
              <div className="col-5 col-lg-9">
                <h1 className="h2">OUR MISSION</h1>
                <p className="aboutUsText my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, iste molestiae beatae, maiores deserunt in voluptatibus
                  aspernatur architecto excepturi delectus soluta? Ipsa,
                  deleniti dolorem hic consequatur repellat eveniet quidem
                  voluptate necessitatibus dolorum delectus minus vitae, ut,
                  veritatis sint ipsum magnam autem nam ex deserunt debitis
                  eaque ratione! Nobis, quidem assumenda.Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Neque, iste molestiae
                  beatae, maiores deserunt in voluptatibus aspernatur architecto
                  excepturi delectus soluta? Ipsa, deleniti dolorem hic
                  consequatur repellat eveniet quidem voluptate necessitatibus
                  dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                  autem nam ex deserunt debitis eaque ratione! Nobis, quidem
                  assumenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ValuesBox">
        <h2>OUR GOALS</h2>
        <section className="values py-5 mx-2">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img
                className="img-fluid d-block mx-auto"
                src={aboutus}
                id="ValuesPic"
              />
            </div>
            <div className="col-lg-4">
              <img
                className="img-fluid d-block mx-auto"
                src={aboutus}
                id="ValuesPic"
              />
            </div>
            <div className="col-lg-4">
              <img
                className="img-fluid d-block mx-auto"
                src={aboutus}
                id="ValuesPic"
              />
            </div>
          </div>
        </section>
      </div>
      <Team />
    </>
  );
}

export default Mission;
