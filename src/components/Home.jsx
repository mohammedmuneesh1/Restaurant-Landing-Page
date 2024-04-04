import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const Home = () => {
  return (
    <div id="home-parent-id" className="home-parent">
      <div className="Home-Background-Banner">
        <img src={process.env.REACT_APP_HOME_SECTION_BACKGROUND_IMAGE} alt="home banner background" />
      </div>
      <div className="home-text">
        <h1 className="primary-heading">
          Your Favourite Food Delivered Hot & Fresh
        </h1>
        <p className="primary-paragraph">
          Healthy Switcher chefs handle all the pre-cooking tasks, such as
          peeling, chopping, and marinating, to make your culinary experience
          with fresh ingredients seamless.
        </p>
        <button className="primary-button">
            Order Now <FaArrowRight />
        </button>
      </div>
      <div className="home-banner-image">
        <img src={process.env.REACT_APP_HOME_SECTION_BANNER_IMAGE} alt="Home section banner " />
      </div>

    </div>
  );
};
