import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";

export const About = () => {
  return (
    <div id="about-container-id">
      <div className="about-background-image-container">
        <img
          src={process.env.REACT_APP_ABOUT_SECTION_BACKGROUND_IMAGE}
          alt="background of about"
        />
      </div>
      <div className="about-banner-container">
          <img src={process.env.REACT_APP_ABOUT_SECTION_BANNER_IMAGE} alt="about banner jpg" />

        </div>
      <div className="about-text-container">
        <p className="sub-heading">About </p>
        <h1 className="primary-heading" id="about-primary-heading">Food Constitutes A Cornerstone Of A Balanced Dietary Regimen</h1>
        <p className="primary-paragraph">
          Discover the power of balance in your diet. Our approach emphasizes
          the importance of incorporating diverse food groups for optimal
          health. With a balanced regimen, you'll fuel your body efficiently,
          promoting vitality and well-being. Join us on the journey to a
          healthier you.
        </p>
        <p className="primary-paragraph">
          Optimize your health with balanced nutrition. Our approach ensures
          vital nutrients for peak well-being. Join us for a healthier you.
        </p>
        <div className="about-buttons">
          <button className="primary-button" id="about-primary-button">Learn More</button>
          <button className="watch-video-button">Play Video <MdSlowMotionVideo /> </button>
        </div>
      </div>
  
    </div>
  );
};
