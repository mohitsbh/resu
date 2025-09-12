import React from "react";
import { Typography, Container, Grid, Paper, Box, Divider } from "@mui/material";
import "./About.css";

const About = () => {
    return (
        <section className="about-section" id="about">
            <Container maxWidth="lg">
                <Typography variant="h2" className="section-title">
                    About Me
                </Typography>
                <Divider className="section-divider" />

                <Grid container spacing={4} className="about-content">
                    {/* Bio Section */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} className="about-card">
                            <Typography variant="h5" className="card-title">
                                Who I Am
                            </Typography>
                            <Typography variant="body1" className="bio-text">
                                I'm a passionate AI & Data Science enthusiast and Software Developer with a strong foundation in web development.
                                I enjoy solving complex problems and building innovative solutions that make a difference.
                                My approach combines technical expertise with creative thinking to deliver high-quality results.
                            </Typography>
                            <Typography variant="body1" className="bio-text">
                                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
                                and continuously expanding my knowledge in the rapidly evolving tech landscape.
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Education Section */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} className="about-card">
                            <Typography variant="h5" className="card-title">
                                Education
                            </Typography>

                            <Box className="education-item">
                                <Typography variant="h6">Bachelor of Engineering in Artificial Intelligence And Data Science</Typography>
                                <Typography variant="subtitle1" className="institution">Mumbai University</Typography>
                                <Typography variant="body2" className="duration">2022 - 2026</Typography>
                                <Typography variant="body2" className="details">
                                    • CGPA: 7.0/10
                                    <br />
                                    • Relevant Coursework: Data Structures, Algorithms, Database Management, Machine Learning, Web Development
                                    <br />
                                    • Final Year Project: Fake News Detection using Deep Learning
                                </Typography>
                            </Box>

                            <Divider className="item-divider" />

                            <Box className="education-item">
                                <Typography variant="h6">Higher Secondary Education</Typography>
                                <Typography variant="subtitle1" className="institution">Maharashtra State Board</Typography>
                                <Typography variant="body2" className="duration">2020 - 2022</Typography>
                                <Typography variant="body2" className="details">
                                    • Percentage: 60%
                                    <br />
                                    • Science Stream
                                </Typography>

                            </Box>
                            <Divider className="item-divider" />
                            <Box className="education-item">
                                <Typography variant="h6">Secondary Education</Typography>
                                <Typography variant="subtitle1" className="institution">Maharashtra State Board</Typography>
                                <Typography variant="body2" className="duration">2019 - 2020</Typography>
                                <Typography variant="body2" className="details">
                                    • Percentage: 92%
                                    <br />

                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Experience Section */}
                    <Grid item xs={12}>
                        <Paper elevation={3} className="about-card">
                            <Typography variant="h5" className="card-title">
                                Professional Experience
                            </Typography>

                            <Box className="experience-item">
                                <Typography variant="h6">FullStack Development Intern</Typography>
                                <Typography variant="subtitle1" className="company">NullClass Tech.</Typography>
                                <Typography variant="body2" className="duration">June 2025 - Present</Typography>
                                <Typography variant="body2" className="details">
                                    • Developed and maintained responsive web applications using React.js and Node.js
                                    <br />
                                    • Collaborated with the design team to implement UI/UX improvements
                                    <br />
                                    • Participated in code reviews and implemented feedback to improve code quality
                                    <br />
                                    • Assisted in database design and optimization using MongoDB
                                </Typography>
                            </Box>

                            <Divider className="item-divider" />

                            <Box className="experience-item">
                                <Typography variant="h6">Frontend Development Intern</Typography>
                                <Typography variant="subtitle1" className="company">BlueBricks</Typography>
                                <Typography variant="body2" className="duration">june 2024 - August 2024</Typography>
                                <Typography variant="body2" className="details">
                                    • Developed responsive frontend components using React.js and Material UI
                                    <br />
                                    • Implemented pixel-perfect UI designs and ensured cross-browser compatibility
                                    <br />
                                    • Collaborated with backend developers to integrate RESTful APIs
                                    <br />
                                    • Optimized website performance and improved loading times by 30%
                                </Typography>
                            </Box>


                            <Divider className="item-divider" />

                            <Box className="experience-item">
                                <Typography variant="h6">Software Developer Engineer Intern</Typography>
                                <Typography variant="subtitle1" className="company">Bluestock</Typography>
                                <Typography variant="body2" className="duration">june 2024 - August 2024</Typography>
                                <Typography variant="body2" className="details">
                                    • Contributed to backend development using Node.js and Express.js
                                    <br />
                                    • Designed and implemented database schemas using MongoDB
                                    <br />
                                    • Created RESTful APIs for financial data processing and analysis
                                    <br />
                                    • Participated in code reviews and implemented best practices for security
                                </Typography>
                            </Box>

                            <Divider className="item-divider" />

                            <Box className="experience-item">
                                <Typography variant="h6">Frontend Developer Intern</Typography>
                                <Typography variant="subtitle1" className="company">BlueBricks</Typography>
                                <Typography variant="body2" className="duration">june 2023 - August 2023</Typography>
                                <Typography variant="body2" className="details">
                                    • Built interactive UI components using HTML, CSS, and JavaScript
                                    <br />
                                    • Assisted in developing a responsive website for real estate listings
                                    <br />
                                    • Implemented form validation and user authentication features
                                    <br />
                                    • Collaborated with designers to ensure consistent brand identity
                                </Typography>
                            </Box>

                        </Paper>
                    </Grid>

                    {/* Skills Section */}
                    <Grid item xs={12}>
                        <Paper elevation={3} className="about-card">
                            <Typography variant="h5" className="card-title">
                                Skills & Expertise
                            </Typography>

                            <Grid container spacing={2} className="skills-container">
                                <Grid item xs={12} sm={6} md={4}>
                                    <Paper className="skill-category">
                                        <Typography variant="h6">Programming Languages</Typography>
                                        <Typography variant="body2">
                                            JavaScript, Python, Java, C++, HTML/CSS
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Paper className="skill-category">
                                        <Typography variant="h6">Frameworks & Libraries</Typography>
                                        <Typography variant="body2">
                                            React.js, Node.js, Express.js, Django, TensorFlow, PyTorch
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Paper className="skill-category">
                                        <Typography variant="h6">Tools & Technologies</Typography>
                                        <Typography variant="body2">
                                            Git, MongoDB, MySQL, Firebase
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Paper className="skill-category">
                                        <Typography variant="h6">Data Science</Typography>
                                        <Typography variant="body2">
                                            Machine Learning, Data Analysis, Data Visualization, NLP
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Paper className="skill-category">
                                        <Typography variant="h6">Web Development</Typography>
                                        <Typography variant="body2">
                                            Responsive Design, RESTful APIs, UI/UX
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Paper className="skill-category">
                                        <Typography variant="h6">Soft Skills</Typography>
                                        <Typography variant="body2">
                                            Problem Solving, Team Collaboration, Communication, Time Management
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default About;