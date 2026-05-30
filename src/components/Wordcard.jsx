import "./wordcard.css";
import { NavLink } from "react-router-dom";
import Wordcarddata from "./Wordcarddata";
import ScrollReveal from "./ScrollReveal";

const Wordcard = ({ projects }) => {
  const list = projects && Array.isArray(projects) ? projects : Wordcarddata;

  return (
    <div className="project-container">
      {list.map((project, idx) => (
        <ScrollReveal key={project.id} delay={idx * 60}>
          <div className="project-card">
            <div className="project-img-wrap">
              <img src={project.imgsrc} alt={project.title} />
              <div className="project-img-overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="project-card-body">
              <h2 className="pro-title">{project.title}</h2>
              <p className="pro-info">{project.info}</p>
              {project.tech && (
                <div className="pro-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="pro-tech-badge">{t}</span>
                  ))}
                </div>
              )}
              {project.highlights && (
                <div className="pro-highlights">
                  {project.highlights.map((h, i) => (
                    <span key={i} className="pro-highlight-tag">{h}</span>
                  ))}
                </div>
              )}
              <div className="pro-meta">
                <span className="pro-category" data-cat={project.category}>{project.category}</span>
              </div>
              <div className="pro-buttons">
                <NavLink to={project.viewLink} className="btn" target="_blank">
                  View
                </NavLink>
                <NavLink to={project.sourceLink} className="btn btn-outline" target="_blank">
                  Source
                </NavLink>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default Wordcard;
