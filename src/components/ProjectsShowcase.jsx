import React from "react";
import { Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Wordcarddata from "./Wordcarddata";
import "./ProjectsShowcase.css";

const ProjectsShowcase = () => {
  const sorted = [...Wordcarddata].sort((a, b) => (a.priority || 999) - (b.priority || 999));
  const featuredProjects = sorted.slice(0, 6);

  return (
    <section className="projects-showcase" id="projects">
      <Container maxWidth="lg">
        <Typography variant="h2" className="section-title">
          Featured Projects
        </Typography>
        <Divider className="section-divider" />

        <Typography variant="body1" className="section-description">
          Here are some of my recent projects that showcase my skills and expertise. Each project represents a unique challenge and solution. <br />
        </Typography>

        <Grid container spacing={4} className="projects-grid">
          {featuredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card className="project-card">
                <CardMedia
                  component="img"
                  height="180"
                  image={project.imgsrc}
                  alt={project.title}
                  className="project-image"
                />
                <CardContent className="project-content">
                  <Typography variant="h5" component="div" className="project-title">
                    {project.title}
                  </Typography>
                  <Box className="project-category">
                    <span className="category-tag">{project.category}</span>
                  </Box>
                  {project.tech && (
                    <Box className="pro-tech-showcase">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="pro-tech-tag">{t}</span>
                      ))}
                    </Box>
                  )}
                  <Typography variant="body2" color="text.secondary" className="project-description">
                    {project.info}
                  </Typography>
                </CardContent>
                <CardActions className="project-actions">
                  <Button
                    size="small"
                    component="a"
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    View Live
                  </Button>
                  {project.sourceLink && (
                    <Button
                      size="small"
                      component="a"
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-btn"
                    >
                      Source Code
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="view-all-container">
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            className="view-all-btn"
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default ProjectsShowcase;
