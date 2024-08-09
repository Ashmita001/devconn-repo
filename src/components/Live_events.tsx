// import React from 'react'
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Live_events = () => {
  return (
    <div className="Live-Events_box">
      <div className="section-1">
        <div className="text">DEV Live events</div>
        <div className="btn">
          <button type="button" className="more button-1">
            <MdOutlineMoreHoriz />
          </button>
          <button type="button" className="cross button-1">
            <RxCross1 />
          </button>
        </div>
      </div>
      <div className="section-2">
        <div className="image-div">
          <img src="Chat\pics\emoji.png" className="image" alt="image" />
        </div>
        <p className="section-2-text">
          Behind the Code : A Discussion with Backend Expert{" "}
        </p>
      </div>
      <div className="section-3">
        <img src="Chat\pics\guy.png" className="guy_image" alt="image" />
      </div>
      <div className="section-4">
        <p>
          Join us for discussion with contributor, founders and CEOs like Larvel
          , Node.js , Prisma , and Subpase .We'll talk through
          <ul>
            <li>The features of backend frameworks and databases</li>
            <li>The impact of APIs on modern software development</li>
            <li>Best practices for building scalable and secure databases</li>
            <li>How AI will impact development</li>
          </ul>
        </p>
      </div>
      <div className="section-5">
        <button type="button" className="section-5-button">Tune in to the full event</button>
      </div>
    </div>
  );
};

export default Live_events;
