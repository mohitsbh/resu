// import React from "react";
// import "./wordcard.css";
// import { NavLink } from "react-router-dom";
// import todo from "../assets/todo.jpg";
// import Wordcarddata from "./Wordcarddata";
// import construction from "../assets/construction.jpg";
// import dynamic from "../assets/dynamic-ui.jpg";
// import popup from "../assets/popup.png";
// import web_gallery from "../assets/web-gallery.png";
// import notes from "../assets/notes-ui.png";
// import edusity from "../assets/edusity.png";
// import justice from "../assets/justice-for-sport.png";
// import weatherimg from "../assets/weather-project.png";
// import youtube_img from "../assets/youtube-clone.png";
// import todo_img from "../assets/todolist-project.png"

// const Wordcard = (props) => {
//   return (
//     <div>
//       <div className="project-card">
//         {/* <img src={props.imgsrc} alt="1 image" /> */}
//         <img src={todo} alt="1" />
//         <h2 className="pro-title">To Do List</h2>
//         <p className="pro-info">
//           This is To Do List Web App. This is helpful for managing multi tasks
//           in our time.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://to-do-list-wa.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://to-do-list-wa.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={construction} alt="1 image" />
//         <h2 className="pro-title">Construction UI</h2>
//         <p className="pro-info">
//           This Is user Interface of Construction website. With
//           Projects,services,contact,etc sections.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://construction-u.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://construction-u.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={dynamic} alt="1 image" />
//         <h2 className="pro-title">Dynamic UI</h2>
//         <p className="pro-info">
//           This is beutiful Dynamiv UI website. With beautiful dynamic images.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://meet-u.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://meet-u.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={popup} alt="1 image" />
//         <h2 className="pro-title">POPUP Message UI</h2>
//         <p className="pro-info">This is poup message UI. </p>
//         <div className="pro-buttons">
//           <NavLink to="https://pop-up-1.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://pop-up-1.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={web_gallery} alt="1 image" />
//         <h2 className="pro-title">WEB GALLERY</h2>
//         <p className="pro-info">
//           This is beutiful Web Gallery UI website. With some images.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://web-gallery-1.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://web-gallery-1.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={notes} alt="1 image" />
//         <h2 className="pro-title">Notes Web App</h2>
//         <p className="pro-info">
//           This is beautiful Notes web app. Create and delete notes.save in
//           localstorage.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://notes-webapp-1.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://notes-webapp-1.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={edusity} alt="1 image" />
//         <h2 className="pro-title">Edusity clone website</h2>
//         <p className="pro-info">
//           This is Edusity Clone Website. This is made for better experince and
//           also use for colleges for representation.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://edusityclonee.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://edusityclonee.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={justice} alt="1 image" />
//         <h2 className="pro-title">Justice For Sport</h2>
//         <p className="pro-info">This Website is made for my client.</p>
//         <div className="pro-buttons">
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={weatherimg} alt="1 image" />
//         <h2 className="pro-title">Weather Project</h2>
//         <p className="pro-info">This Website is made for get a internship.</p>
//         <div className="pro-buttons">
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={youtube_img} alt="1 image" />
//         <h2 className="pro-title">Youtube clone</h2>
//         <p className="pro-info">
//           This Website is made for improve skills of React.
//         </p>
//         <div className="pro-buttons">
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>

//       <div className="project-card">
//         <img src={todo_img} alt="1 image" />
//         <h2 className="pro-title">To-Do-List</h2>
//         <p className="pro-info">This Website is my internship project with Learntricks.</p>
//         <div className="pro-buttons">
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             view
//           </NavLink>
//           <NavLink to="https://justice-for-sport.netlify.app/" className="btn">
//             source
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wordcard;



import React from "react";
import "./wordcard.css";
import { NavLink } from "react-router-dom";
import Wordcarddata from "./Wordcarddata";

const Wordcard = () => {
  return (
    <div className="project-container">
      {Wordcarddata.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imgsrc} alt={project.title} />
          <h2 className="pro-title">{project.title}</h2>
          <p className="pro-info">{project.info}</p>
          <div className="pro-buttons">
            <NavLink to={project.viewLink} className="btn" target="_blank">
              View
            </NavLink>
            <NavLink to={project.sourceLink} className="btn" target="_blank">
              Source
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wordcard;
