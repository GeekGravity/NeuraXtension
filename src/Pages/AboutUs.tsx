import "./styles.css";
import aboutus from "./Pictures/About-us.jpg";
import Team from "./Team";

function AboutUs() {
  return (
    <>
      <section className="row align-items-center MissionBox py-4">
        <div className="col-md-6 col-12 my-4 py-md-5">
          <img className="img-fluid d-block mx-auto" src={aboutus} />
        </div>
        <div className="col-md-6 col-12 text-center my-2 py-md-5 my-lg-0">
          <h1 className="h2">OUR MISSION</h1>
          <p className="my-4 mx-lg-5 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste
            molestiae beatae, maiores deserunt in voluptatibus aspernatur
            architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic
            consequatur repellat eveniet quidem voluptate necessitatibus dolorum
            delectus minus vitae, ut, veritatis sint ipsum magnam autem nam ex
            deserunt debitis eaque ratione! Nobis, quidem assumenda.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
            beatae, maiores deserunt in voluptatibus aspernatur architecto
            excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
            repellat eveniet quidem voluptate necessitatibus dolorum delectus
            minus vitae, ut, veritatis sint ipsum magnam autem nam ex deserunt
            debitis eaque ratione! Nobis, quidem assumenda.
          </p>
        </div>
      </section>
      <section className="ValuesBox">
        <h2 className="mb-5 pb-2">OUR GOALS</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 py-3 mx-auto value">
            <img className="img-fluid d-block mx-auto" src={aboutus} />
          </div>
          <div className="col-lg-4 col-md-6 py-3 value">
            <img className="img-fluid d-block mx-auto" src={aboutus} />
          </div>
          <div className="col-lg-4 col-md-6 pt-3 mx-auto value">
            <img className="img-fluid d-block mx-auto" src={aboutus} />
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}

export default AboutUs;
