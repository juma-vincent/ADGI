import React from "react";
import { ReactComponent as TruckIcon } from "../../assets/icons/truck.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/locked.svg";
import { ReactComponent as EventTentIcon } from "../../assets/icons/event-tent.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";
import "./features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <TruckIcon className="icon" />

        <div className="content">
          <h3>Promoting Human Rights</h3>
          <p>
          We work with authorities to ensure justice is served to victims.
          </p>
        </div>
      </div>
      <div className="feature">
        <TrophyIcon className="icon" />
        <div className="content">
          <h3>Housing and Settlement</h3>
          <p>
          We provide safety by giving victims temporary shelter as we help them find refuge.
          </p>
        </div>
      </div>
      
      
      <div className="feature">
        <PhoneIcon className="icon" />
        <div className="content">
          <h3>Education</h3>
          <p>
          We provide counselling and capacity building to victims towards wholesomeness.

          </p>
        </div>
      </div>

      <div className="feature">
        <EventTentIcon className="icon" />

        <div className="content">
          <h3>Health and Welfare</h3>
          <p>
          We work closely with health facilities in ensuring victims are checked
          and treated by doctors.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Features;