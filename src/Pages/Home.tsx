import homeBg from "./Pictures/homePageBg.jpg";
import groupImg from "./Pictures/homeGroupImg.jpg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="container-fluid px-0 homePageBg">
        <img className="img-fluid" src={homeBg} />
        <div className="col-lg-6 col-8 text-center mb-5 pb-5 homePageOverlay">
          <div className="row justify-content-center">
            <h1>WHERE MIND MEETS INNOVATION</h1>
            <p>
              Pioneering breakthroughs in neurotechnology to understand,
              connect, and enhance the human brain.
            </p>
          </div>
        </div>
        <button
          className="btn btn-lg btn-secondary homePageBtn"
          onClick={() => navigate("/Get-Involved")}
        >
          Get Involved
        </button>
      </section>
      <section className="container-fluid my-4 pb-3">
        <div className="row align-items-center">
          <div className="col-lg-6 my-3 d-flex justify-content-center">
            <img src={groupImg} className="img-fluid homeGroupImg" />
          </div>
          <div className="col-lg-6 text-center my-md-5 pt-3 homeContent">
            <h2>WHO WE ARE</h2>
            <p className="my-4 mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              iste molestiae beatae, maiores deserunt in voluptatibus aspernatur
              architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic
              consequatur repellat eveniet quidem voluptate necessitatibus
              dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
              autem nam ex deserunt debitis eaque ratione! Nobis, quidem
              assumenda stiae beatae, maiores deserunt in voluptatibus
              aspernatur architecto excepturi delectus soluta? Ipsa, deleniti
              dolorem hic consequatur repellat eveniet quidem voluptate
              necessitatibus dolorum delectus minus vitae, ut, veritatis sint
              ipsum magnam au.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
