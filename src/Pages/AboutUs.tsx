import "./styles.css";
import aboutus from "./Pictures/homeGroupImg.jpg";
import value1 from "./Pictures/Value-1.png";
import value2 from "./Pictures/Value-2.png";
import value3 from "./Pictures/Value-3.png";
import Team from "./Team";

function AboutUs() {
  return (
    <>
      <section className="MissionBox py-4">
        <div className="container-fluid py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3 d-flex justify-content-center">
              <img className="img-fluid" src={aboutus} />
            </div>
            <div className="col-lg-6 text-center my-md-5 pt-3">
              <h2>Mission</h2>
              <p className="my-4 mx-5">
                Our mission is to empower students with the knowledge and skills
                to engage with neurotechnology in meaningful ways. We aim to
                create a dynamic environment where curiosity meets innovation,
                providing hands-on experiences, discussions, and mentorship
                opportunities. By fostering interdisciplinary collaboration, we
                strive to bridge the gap between neuroscience, engineering, and
                computer science, preparing members for impactful contributions
                in research, healthcare, and industry. Through education,
                networking, and real-world applications, we seek to inspire the
                next generation of pioneers in brain-computer interfaces,
                cognitive enhancement, and neuro-inspired technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ValuesBox">
        <h2 className="mb-5 pb-2">Goals</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 py-3 mx-auto value">
            <img className="img-fluid d-block mx-auto" src={value1} />
          </div>
          <div className="col-lg-4 col-md-6 py-3 value">
            <img className="img-fluid d-block mx-auto" src={value2} />
          </div>
          <div className="col-lg-4 col-md-6 pt-3 mx-auto value">
            <img className="img-fluid d-block mx-auto" src={value3} />
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}

export default AboutUs;
