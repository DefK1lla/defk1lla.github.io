import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Parallax } from 'react-parallax';

import SectionTitle from '../components/SectionTitle';
import ProjectsList from '../components/ProjectsList';
import GitHubLink from '../components/GitHubLink';

import projects from '../content/projects.json';

const Wrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '50px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
  }
}));

const Projects = () => {
  return (
    <Parallax
      bgImage='./assets/img/projects/bg.jpg'
      strength={-200}
    >
      <Wrapper
        id='projects'
      >
        <Container>
          <SectionTitle
            variant='secondary'
            component='h2'
          >
            Проекты
          </SectionTitle>

          <ProjectsList
            projects={projects}
          />

          <GitHubLink />
        </Container>
      </Wrapper>
    </Parallax>
  );
};

export default Projects;