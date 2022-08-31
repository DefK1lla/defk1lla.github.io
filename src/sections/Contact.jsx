import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Parallax } from 'react-parallax';

import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import Social from '../components/Social';

const Wrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: '50px 0',
}));

const Content = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
}));

const SocWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: -1,
  margin: -15
}));

const Contact = () => {
  return (
    <Parallax
      bgImage='./assets/img/contact/bg.jpg'
      strength={300}
    >
      <Wrapper>
        <Container>
          <SectionTitle
            variant='primary'
            component='h2'
          >
            Контакты
          </SectionTitle>

          <Content>
            <ContactForm />

            <SocWrapper>
              <Social />
            </SocWrapper>
          </Content>
        </Container>
      </Wrapper>
    </Parallax>
  )
};

export default Contact;