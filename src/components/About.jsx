import { Typography, Container, Grid, Box } from "@mui/material";
import { FaCode, FaGraduationCap, FaBriefcase, FaBrain, FaLayerGroup, FaTools, FaChartBar, FaHandshake } from "react-icons/fa";
import "./About.css";

const skills = [
  { name: "React.js", level: 90, icon: "⚛️" },
  { name: "JavaScript", level: 85, icon: "🟨" },
  { name: "Node.js", level: 75, icon: "🟢" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "MongoDB", level: 70, icon: "🍃" },
  { name: "Machine Learning", level: 72, icon: "🤖" },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-glow" />
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title">
          About Me
        </Typography>
        <div className="section-divider" />

        <Grid container spacing={3} className="about-content">
          {/* Bio + Quick Stats */}
          <Grid item xs={12} md="auto">
            <div className="about-bio-card">
              <div className="about-bio-icon">
                <FaCode />
              </div>
              <Typography variant="h5" className="about-bio-title">Who I Am</Typography>
              <Typography variant="body1" className="about-bio-text">
                I'm a passionate AI & Data Science enthusiast and Software Developer
                who loves building intelligent solutions and seamless web experiences.
              </Typography>
              <Typography variant="body1" className="about-bio-text">
                When I'm not coding, I explore new tech, contribute to open-source,
                and push the boundaries of what I can create.
              </Typography>
              <Box className="about-bio-stats">
                <div className="about-bio-stat">
                  <span className="about-bio-stat-num">3+</span>
                  <span className="about-bio-stat-lbl">Years Coding</span>
                </div>
                <div className="about-bio-stat">
                  <span className="about-bio-stat-num">30+</span>
                  <span className="about-bio-stat-lbl">Projects</span>
                </div>
                <div className="about-bio-stat">
                  <span className="about-bio-stat-num">5+</span>
                  <span className="about-bio-stat-lbl">Internships</span>
                </div>
              </Box>
            </div>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md>
            <div className="about-card">
              <Typography variant="h5" className="card-title">
                <FaGraduationCap className="card-title-icon" /> Education
              </Typography>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-body">
                  <Typography variant="h6" className="edu-degree">BE in AI & Data Science</Typography>
                  <span className="edu-school">Mumbai University</span>
                  <span className="edu-year">2022 - 2026</span>
                  <ul className="edu-detail">
                    <li>CGPA: 7.0/10</li>
                    <li>Coursework: DSA, ML, DBMS, Web Dev</li>
                    <li>Final Year: Fake News Detection using Deep Learning</li>
                  </ul>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-body">
                  <Typography variant="h6" className="edu-degree">Higher Secondary (Science)</Typography>
                  <span className="edu-school">Maharashtra State Board</span>
                  <span className="edu-year">2020 - 2022</span>
                  <ul className="edu-detail">
                    <li>Percentage: 60%</li>
                  </ul>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-body">
                  <Typography variant="h6" className="edu-degree">Secondary Education</Typography>
                  <span className="edu-school">Maharashtra State Board</span>
                  <span className="edu-year">2019 - 2020</span>
                  <ul className="edu-detail">
                    <li>Percentage: 92%</li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>

          {/* Experience */}
          <Grid item xs={12}>
            <div className="about-card">
              <Typography variant="h5" className="card-title">
                <FaBriefcase className="card-title-icon" /> Professional Experience
              </Typography>
              <Grid container spacing={2}>
                {[
                  { role: "FullStack Dev Intern", company: "NullClass Tech.", period: "Jun 2025 - Present", details: ["React.js & Node.js development", "UI/UX improvements", "Code reviews", "MongoDB optimization"] },
                  { role: "Frontend Dev Intern", company: "BlueBricks", period: "Jun 2024 - Aug 2024", details: ["React & MUI components", "Pixel-perfect UI", "REST API integration", "30% load time improvement"] },
                  { role: "SDE Intern", company: "Bluestock", period: "Jun 2024 - Aug 2024", details: ["Node.js & Express.js backend", "MongoDB schema design", "RESTful APIs", "Security best practices"] },
                  { role: "Frontend Intern", company: "BlueBricks", period: "Jun 2023 - Aug 2023", details: ["HTML/CSS/JS components", "Real estate website", "Form validation", "Brand identity"] },
                ].map((exp, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <div className="exp-item">
                      <span className="exp-period">{exp.period}</span>
                      <Typography variant="h6" className="exp-role">{exp.role}</Typography>
                      <span className="exp-company">{exp.company}</span>
                      <ul className="exp-details">
                        {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                      </ul>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>

          {/* Skills with Progress Bars */}
          <Grid item xs={12}>
            <div className="about-card">
              <Typography variant="h5" className="card-title">
                <FaBrain className="card-title-icon" /> Skills & Proficiency
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <div className="skills-progress">
                    {skills.map((s, i) => (
                      <div className="skill-progress-item" key={i}>
                        <div className="skill-progress-header">
                          <span className="skill-progress-icon">{s.icon}</span>
                          <span className="skill-progress-name">{s.name}</span>
                          <span className="skill-progress-pct">{s.level}%</span>
                        </div>
                        <div className="skill-progress-track">
                          <div className="skill-progress-bar" style={{ width: `${s.level}%` }}>
                            <div className="skill-progress-shine" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Grid>
                <Grid item xs={12} md={5}>
                  <div className="skills-categories">
                    {[
                      { icon: <FaLayerGroup />, title: "Languages", items: "JavaScript, Python, Java, C++, HTML/CSS" },
                      { icon: <FaTools />, title: "Frameworks", items: "React, Node.js, Express, Django, TensorFlow" },
                      { icon: <FaChartBar />, title: "Data Science", items: "ML, Data Analysis, NLP, Visualization" },
                      { icon: <FaHandshake />, title: "Soft Skills", items: "Problem Solving, Teamwork, Communication" },
                    ].map((cat, i) => (
                      <div className="skills-cat-item" key={i}>
                        <span className="skills-cat-icon">{cat.icon}</span>
                        <div>
                          <div className="skills-cat-title">{cat.title}</div>
                          <div className="skills-cat-items">{cat.items}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
