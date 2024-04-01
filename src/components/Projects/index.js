// Projects.js

import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('All');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === 'All'}
            value="All"
            onClick={() => setToggle('All')}
          >
            All
          </ToggleButton>

          <ToggleButton
            active={toggle === 'Cybersecurity'}
            value="Cybersecurity"
            onClick={() => setToggle('Cybersecurity')}
          >
            Cybersecurity
          </ToggleButton>

          <ToggleButton
            active={toggle === 'Web App'}
            value="Web App"
            onClick={() => setToggle('Web App')}
          >
            Web App
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === 'All' && projects.map(project => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}

          {toggle !== 'All' && projects.filter(item => item.category === toggle).map(project => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
