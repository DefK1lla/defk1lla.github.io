import { Box, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import DownloadCV from '../components/DownloadCV';

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: '40px 0',
  background: theme.palette.primary.main,
  '&::before': {
    content: 'url(./assets/img/footer/wave.svg)',
    position: 'absolute',
    bottom: '50%',
    left: 0,
    zIndex: 0,
    transfrom: 'translateY(-100%)',
    width: '100%',
  }
}));

const Content = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'cetner',
  flexWrap: 'wrap',
  color: theme.palette.common.white
}));

const Email = styled('div')(({ theme }) => ({
  width: 195,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Footer = () => {
  return (
    <Wrapper
      component='footer'
      textAlign='center'
    >
      <Container>
        <Content>
          <Button
            variant='string'
            startIcon={<GitHubIcon />}
            href='https://github.com/DefK1lla/react-portfolio'
            target='_blank'
          >
            Исходный код
          </Button>

          <Email>
            <EmailIcon />
            set.adoyan@gmail.com
          </Email>

          <DownloadCV
            variant='string'
          />
        </Content>
      </Container>
    </Wrapper >
  );
};

export default Footer;