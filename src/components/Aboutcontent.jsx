import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid } from "@mui/material";
import { FaUserTie, FaBriefcase, FaCertificate, FaExternalLinkAlt, FaEnvelope, FaReact, FaJsSquare, FaCss3Alt, FaFigma, FaDatabase } from "react-icons/fa";
import "./Aboutcontent.css";

const Aboutcontent = () => {
  const certificates = [
    { title: 'Generative AI Bootcamp', link: 'https://www.udemy.com/certificate/UC-1aabd0b4-014d-4f17-be00-30ad7630bbef/', issuer: 'Udemy', date: '2024' },
    { title: 'SQL 2.0 Webinar', link: 'https://drive.google.com/file/d/1Ia1_KbgthLiVjXZRt9NZrt52YK0X0A8g/view', issuer: 'SkillEcted', date: '2024' },
    { title: 'UI/UX Design with Figma', link: 'https://www.udemy.com/certificate/UC-4676d60c-70fa-4805-b4ca-520029bdbaef/', issuer: 'Udemy', date: '2023' },
    { title: 'Javascript For Beginners', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-57241c7f-c02d-4eee-a008-5a4d34b724b9.pdf', issuer: 'Udemy', date: '2022' },
    { title: 'Practical Web Development', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9eec607b-3e3c-4921-8407-3910c9cc426a.pdf', issuer: 'Udemy', date: '2022' },
    { title: 'Full Stack Web Development', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-46d9c497-870a-4c01-b6d0-358de77abf96.pdf', issuer: 'Udemy', date: '2023' },
    { title: 'React js Tutorial', link: 'https://drive.google.com/file/d/1op2pYhuP2frgTJ10OC35ZsWXXbhEA-R4/view', issuer: 'Drive', date: '2023' },
    { title: 'C++ Programming', link: 'https://drive.google.com/file/d/18xxWzdiRaW09grmf522w7D3ihz27jLQu/view', issuer: 'Drive', date: '2021' }
  ];

  return (
    <Box className="about" id="about" sx={{ width: "100%", marginTop: "3rem", padding: "1rem" }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Section - Profile Card */}
        <Grid item xs={12} md={5}>
          <Box className="profile-card">
            <div className="avatar">
              {/* Circular avatar — using initials */}
              <div className="initials">MB</div>
            </div>
            <div className="profile-body">
              <Typography variant="h4" className="profile-title"><FaUserTie className="icon-inline" /> Who Am I?</Typography>
              <Typography variant="body1" className="profile-text">
                I'm an AI & Data Science student (3rd year) who loves front-end engineering. I build user-friendly,
                responsive interfaces and enjoy solving problems with clean UI and performant code.
              </Typography>
              <Typography variant="body2" className="profile-text muted">
                Internships: Bluebricks, Learnstriks, Bluestock — worked on UI components, performance improvements, and integration.
              </Typography>
              <div style={{ marginTop: 12 }}>
                <Link to="/contact">
                  <Button variant="contained" color="primary">Contact</Button>
                </Link>
                <a href="/src/Documents/mohit_resume.pdf" target="_blank" rel="noreferrer" className="btn-link" style={{ marginLeft: 10 }}>
                  <Button variant="outlined">Resume</Button>
                </a>
                <a href="mailto:youremail@example.com" style={{ marginLeft: 10 }} aria-label="Email">
                  <Button variant="text" startIcon={<FaEnvelope />}>Email</Button>
                </a>
              </div>
            </div>
          </Box>
        </Grid>

        {/* Right Section - visual/summary or badges */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" textAlign="center" className="section-title">Skills & Technologies</Typography>
          <div className="skill-badges">


            <a className="skill" href="https://reactjs.org" target="_blank" rel="noreferrer noopener" aria-label="React">
              <div className="skill-icon react"><FaReact /></div>
              <div className="skill-name">React</div>
            </a>

            <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer noopener" aria-label="JavaScript">
              <div className="skill-icon js"><FaJsSquare /></div>
              <div className="skill-name">JavaScript</div>
            </a>

            <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer noopener" aria-label="CSS">
              <div className="skill-icon css"><FaCss3Alt /></div>
              <div className="skill-name">CSS</div>
            </a>

            <a className="skill" href="https://www.figma.com" target="_blank" rel="noreferrer noopener" aria-label="Figma">
              <div className="skill-icon"><FaFigma /></div>
              <div className="skill-name">Figma</div>
            </a>

            <a className="skill" href="https://www.tensorflow.org" target="_blank" rel="noreferrer noopener" aria-label="AI and Data">
              <div className="skill-icon"><FaDatabase /></div>
              <div className="skill-name">AI / Data</div>
            </a>
            
          </div>
        </Grid>

      </Grid>
      {/* Experience & Certificates */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" textAlign="center" className="section-title"><FaBriefcase className="icon-inline" /> Experience</Typography>
          <div className="timeline">
            {[
              {
                title: 'Full Stack Web Development Intern',
                company: 'NullClass',
                date: 'Jun 2025 - Dec 2025',
                desc: 'Contributed to product features, unit testing and cross-team QA efforts.',
                link: 'https://drive.google.com/file/d/1ZncIiMFRnlZ-guZsQIYrlJOWcS4VyLxR/view?usp=drivesdk'
              },
              {
                title: 'Frontend Intern',
                company: 'BlueBricks',
                date: 'Sept 2024 - Dec 2024',
                desc: 'Worked on front-end features, performance and testing.',
                link: 'https://onedrive.live.com/'
              },
              {
                title: 'Software Development Engineer',
                company: 'Bluestock',
                date: 'Aug 2024 - Oct 2024',
                desc: 'Implemented full-stack features and maintained REST APIs.',
                link: 'https://photos.google.com/'
              },
              {
                title: 'Frontend Intern',
                company: 'Learntricks',
                date: 'Jul 2024 - Aug 2024',
                desc: 'Built interactive UI components and optimized rendering.',
                link: 'https://drive.google.com/file/d/1LDRy77IeiFTTmTuJerlksFGsjOw8BH1E/view'
              }
            ].map((e, idx) => (
              <div key={e.title} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker" style={{ zIndex: 1 }}><FaBriefcase /></div>
                <div className="timeline-content">
                  <div className="timeline-head">
                    <h4 className="timeline-title">{e.title} <span className="timeline-company">— {e.company}</span></h4>
                    <span className="timeline-date">{e.date}</span>
                  </div>
                  <p className="timeline-desc">{e.desc} {e.link && <a href={e.link} target="_blank" rel="noreferrer" className="timeline-link"><FaExternalLinkAlt /></a>}</p>
                </div>
              </div>
            ))}
          </div>
        </Grid>


        {/* certificates */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="section-title"><FaCertificate className="icon-inline" /> Certificates</Typography>
          <div className="cert-grid">
            {certificates.map((c) => (
              <article className="cert-card modern" key={c.title} tabIndex="0">
                <div className="cert-left">
                  <div className="cert-badge"><FaCertificate /></div>
                </div>
                <div className="cert-body">
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-meta">{c.issuer} • <span className="cert-year">{c.date}</span></div>
                </div>
                <div className="cert-actions">
                  <a href={c.link} target="_blank" rel="noreferrer" aria-label={`Open ${c.title}`} className="cert-action-link">Open</a>
                </div>
                {/* Popup with full certificate info — appears on hover or focus */}
                <div className="cert-popup" role="dialog" aria-hidden="true">
                  <div className="cert-popup-inner">
                    <strong className="cert-popup-title">{c.title}</strong>
                    <div className="cert-popup-meta">{c.issuer} • {c.date}</div>
                    <a className="cert-popup-open" href={c.link} target="_blank" rel="noreferrer">View Certificate</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutcontent;
