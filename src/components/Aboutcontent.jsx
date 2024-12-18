import React from "react";
import "./Aboutcontent.css";
import { Link } from "react-router-dom";

const Aboutcontent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who Am I ?</h1>
        <p>
            I am react front-end-developer. I create
            responsive secure websites for 
            my clients.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="stack-stack top">
                {/* <img src="" className="img" alt="true" /> */}
            </div>
            <div className="stack-stack bottom">
                {/* <img src="" className="img" alt="false" /> */}
            </div>
        </div>
    </div>
  </div>;
};

export default Aboutcontent;
