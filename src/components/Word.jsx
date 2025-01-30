import React from "react";
// import "./word.css";
import "./Wordcarddata.css";
import { NavLink } from "react-router-dom";
import Wordcard from "./Wordcard";
import todo from "../assets/todo.jpg";
import Wordcarddata from "./Wordcarddata";

const Word = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Wordcarddata.map((val,ind)=>{
          return(
            <Wordcard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            view={val.view}
            />
          )
        })}
        <Wordcard/>
      </div>
    </div>
  );
};

export default Word;
