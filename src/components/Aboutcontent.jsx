import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid } from "@mui/material";
import { FaBriefcase, FaCertificate, FaExternalLinkAlt, FaEnvelope, FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, FaBootstrap, FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTensorflow, SiC, SiPython } from "react-icons/si";
import "./Aboutcontent.css";
import mohit_profile from "../assets/mohit_profile.jpg";
import resumePdf from "../Documents/Mohit_resume (1).pdf";

const certificates = [
  { title: 'Generative AI Bootcamp', link: 'https://www.udemy.com/certificate/UC-1aabd0b4-014d-4f17-be00-30ad7630bbef/', issuer: 'Udemy', date: '2024' },
  { title: 'SQL 2.0 Webinar', link: 'https://drive.google.com/file/d/1Ia1_KbgthLiVjXZRt9NZrt52YK0X0A8g/view', issuer: 'SkillEcted', date: '2024' },
  { title: 'UI/UX Design with Figma', link: 'https://www.udemy.com/certificate/UC-4676d60c-70fa-4805-b4ca-520029bdbaef/', issuer: 'Udemy', date: '2023' },
  { title: 'Javascript For Beginners', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-57241c7f-c02d-4eee-a008-5a4d34b724b9.pdf', issuer: 'Udemy', date: '2022' },
  { title: 'Practical Web Development', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9eec607b-3e3c-4921-8407-3910c9cc426a.pdf', issuer: 'Udemy', date: '2022' },
  { title: 'Full Stack Web Development', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-46d9c497-870a-4c01-b6d0-358de77abf96.pdf', issuer: 'Udemy', date: '2023' },
  { title: 'React js Tutorial', link: 'https://drive.google.com/file/d/1op2pYhuP2frgTJ10OC35ZsWXXbhEA-R4/view', issuer: 'Drive', date: '2023' },
  { title: 'C++ Programming', link: 'https://drive.google.com/file/d/18xxWzdiRaW09grmf522w7D3ihz27jLQu/view', issuer: 'Drive', date: '2021' },
];

const experiences = [
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
];

const skillItems = [
  { name: "HTML", icon: <FaHtml5 />, color: "#f97316" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#60a5fa" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#facc15" },
  { name: "React", icon: <FaReact />, color: "#38bdf8" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#34d399" },
  { name: "Express", icon: <SiExpress />, color: "#94a3b8" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#4ade80" },
  { name: "ML/AI", icon: <SiTensorflow />, color: "#f97316" },
  { name: "Python", icon: <SiPython />, color: "#facc15" },
  { name: "C", icon: <SiC />, color: "#64748b" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#a78bfa" },
];

const Aboutcontent = () => {
  return (
    <Box className="about" id="about" sx={{ width: "100%", marginTop: "3rem", padding: "1rem" }}>
      {/* Profile + Skills Row */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={5}>
          <div className="profile-card-modern">
            <div className="profile-card-glow" />
            <div className="profile-avatar-wrap">
              <div className="profile-avatar-ring" />
              <div className="profile-pic">
                <img src={mohit_profile} alt="Mohit Bhosale" />
              </div>
              <div className="profile-status-dot" />
            </div>
            <Typography variant="h4" className="profile-name">Mohit Bhosale</Typography>
            <Typography className="profile-tagline">AI & Full Stack Developer</Typography>
            <div className="profile-meta">
              <span><FaMapMarkerAlt /> Thane, India</span>
              <span><FaCalendarAlt /> B.E. AI&DS (2026)</span>
            </div>
            <div className="profile-stats">
              <div><span className="profile-stat-num">3+</span><span>Years</span></div>
              <div><span className="profile-stat-num">30+</span><span>Projects</span></div>
              <div><span className="profile-stat-num">5+</span><span>Internships</span></div>
            </div>
            <div className="profile-actions">
              <Link to="/contact">
                <Button variant="contained" className="profile-btn-primary">Contact Me</Button>
              </Link>
              <a href={resumePdf} download>
                <Button variant="outlined" className="profile-btn-outline"><FaDownload /> Resume</Button>
              </a>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={5}>
          <div className="skills-modern">
            <Typography variant="h5" className="skills-modern-title">Tech Stack</Typography>
            <div className="skills-modern-grid">
              {skillItems.map((s, i) => (
                <a key={i} className="skill-modern-item" href="#" style={{ '--skill-color': s.color }}>
                  <span className="skill-modern-icon" style={{ color: s.color }}>{s.icon}</span>
                  <span className="skill-modern-name">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Experience & Certificates */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <div className="section-header">
            <FaBriefcase className="section-header-icon" />
            <Typography variant="h5" className="section-header-title">Experience</Typography>
          </div>
          <div className="timeline-modern">
            {experiences.map((e, idx) => (
              <div className="timeline-modern-item" key={idx}>
                <div className="timeline-modern-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-modern-card">
                  <span className="timeline-modern-date">{e.date}</span>
                  <h4 className="timeline-modern-title">{e.title}</h4>
                  <span className="timeline-modern-company">{e.company}</span>
                  <p className="timeline-modern-desc">
                    {e.desc}
                    {e.link && <a href={e.link} target="_blank" rel="noreferrer" className="timeline-modern-link"><FaExternalLinkAlt /></a>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="section-header">
            <FaCertificate className="section-header-icon" />
            <Typography variant="h5" className="section-header-title">Certificates</Typography>
          </div>
          <div className="certs-modern">
            {certificates.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noreferrer" className="cert-modern-item">
                <div className="cert-modern-accent" />
                <div className="cert-modern-badge">
                  <FaCertificate />
                </div>
                <div className="cert-modern-body">
                  <div className="cert-modern-title">{c.title}</div>
                  <div className="cert-modern-meta">{c.issuer} &middot; {c.date}</div>
                </div>
                <FaExternalLinkAlt className="cert-modern-open" />
              </a>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutcontent;
