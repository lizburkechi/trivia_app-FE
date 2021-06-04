import React from "react";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <h1 className="homepage-title">Versus Trivia</h1>
      </div>
      <br />
      <br />
      <div className="image-div">
          <img className="logo-img" src="https://image.flaticon.com/icons/png/512/3400/3400784.png" alt="trivia-logo">
          </img>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="teams-btn-div">
      <a id="pick-teams-btn" className="btn btn-primary" href="/teams">
        Pick Teams!
      </a>
      </div>
    </div>
  );
};

export default Home;
