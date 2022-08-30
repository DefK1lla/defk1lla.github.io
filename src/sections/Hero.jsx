import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Parallax, Background } from 'react-parallax';

import PageTitle from '../components/PageTitle';
import Highlight from '../components/Highlight';
import DownloadCV from '../components/DownloadCV';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BackgroundVideo = styled('video')(({ theme }) => ({
  minWidth: '100vw',
  minHeight: '100vh',
}));

const Content = styled('div')(({ theme }) => ({
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Wrapper = styled('div')(({ theme }) => ({
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  }
}));

const ScrollDown = styled(ExpandMoreIcon)(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.primary.main,
}));

const Hero = () => {
  return (
    <Parallax
      strength={700}
    >
      <Background>
        <BackgroundVideo
          autoPlay
          muted
          loop
          src='./assets/video/heroBG.mp4'
        />
      </Background>

      <Wrapper>
        <Content>
          <PageTitle
            component='h1'
          >
            Фрилансер, <Highlight>Frontend</Highlight>-разработчик, <Highlight>HTML</Highlight>-верстальщик.
          </PageTitle>

          <DownloadCV />

          <IconButton>
            <ScrollDown />
          </IconButton>
        </Content>
      </Wrapper>
    </Parallax>
  );
};

export default Hero;