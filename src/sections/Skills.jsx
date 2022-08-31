import React from 'react';

import { Container } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import SectionTitle from '../components/SectionTitle';
import SkillsList from '../components/SkillsList';

import skills from '../content/skills.json';

const Wrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: '50px 0',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '8%',
    top: '15%',
    zIndex: -999,
    width: '20%',
    height: '20%',
    background: alpha(theme.palette.primary.main, 0.8),
    borderRadius: '25%',
    filter: 'blur(120px)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    right: '15%',
    bottom: '15%',
    zIndex: -999,
    width: '25%',
    height: '25%',
    background: alpha(theme.palette.primary.main, 0.8),
    borderRadius: '25%',
    filter: 'blur(125px)'
  }
}));

const Skills = () => {
  return (
    <Wrapper>
      <Container
        maxWidth='sm'
      >
        <SectionTitle
          component='h1'
        >
          Навыки
        </SectionTitle>

        <SkillsList
          skills={skills}
        />
      </Container>
    </Wrapper>
  );
};

export default Skills;