import React from "react";
import { ReactComponent as HealthIcon } from "../../assets/icons/health.svg";
import { ReactComponent as EducationIcon } from "../../assets/icons/education.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";
import { ReactComponent as HumanRightsIcon } from "../../assets/icons/human-rights.svg";

import "./features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <HumanRightsIcon className="icon" />

        <div className="content">
          <h3>Promoting Human Rights</h3>
          <p>
          We work with authorities to ensure justice is served to survivors.
          </p>
        </div>
      </div>
      <div className="feature">
        <HouseIcon className="icon" />
        <div className="content">
          <h3>Housing and Settlement</h3>
          <p>
          We provide safety by giving survivors temporary shelter as we help them find refuge.
          </p>
        </div>
      </div>
      
      
      <div className="feature">
        <EducationIcon className="icon"/>
        <div className="content">
          <h3>Education</h3>
          <p>
          We provide counselling and capacity building to survivors towards wholesomeness.

          </p>
        </div>
      </div>

      <div className="feature">
        <HealthIcon className="icon" />

        <div className="content">
          <h3>Health and Welfare</h3>
          <p>
          We work closely with health facilities in ensuring survivors are checked
          and treated by doctors.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Features;