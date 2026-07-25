import PropTypes from "prop-types";

function Landing(props) {

  // Render the landing page
  return (
    <div className="landing-page">
      <h1 className="landing-title">Cuisinable</h1>
      <button className="button" onClick={props.getStarted}>Get Started</button>
      <img className="bear" src="/images/bear-chef.png" alt="bear chef" />
      <p className="description">Generate recipes based on food allergies and intolerances</p>
    </div>
  );
}

Landing.propTypes = {
  getStarted: PropTypes.func.isRequired,
};

export default Landing;