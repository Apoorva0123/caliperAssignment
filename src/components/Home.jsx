import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ margin: "0" }}>
      <div id="banner">
        <img src="https://www.petbharoproject.co.in/images/Banner.jpg" />
      </div>
      <div id="getStarted">
        <h1>
          Equipment, resources, and expert service to support your full
          potential
        </h1>
        <p>
          Growing begins with knowing. Hydrofarm isn’t just a centralized hub
          for all your retail and commercial indoor agriculture needs. Our
          seasoned team of category and technical specialists are here to
          empower you as you navigate challenges, no matter how big or small.
          After 40+ years of getting our hands dirty, there’s nothing we can’t
          figure out together.
        </p>
        <button>Get Started</button>
      </div>
      <div id="know">
        <img src="https://www.hydrofarm.com/images/uploaded/home-page/cabage-Copy-1.jpg" />
        <div id="offer">
          <h3>WE KNOW YOU WANT THE BEST, SO THAT’S ALL WE OFFER</h3>
          <p>
            You need to look no further to find exactly what you want, whether
            you’re seeking nutrients or lighting, or want us to craft a plan to
            optimize or scale your commercial operation. Between Hydrofarm’s
            industry-leading house brands and our distributed products, you’re
            covered across every category. And we continue to evolve and add to
            what we’re able to offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
