import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import PageTitle from './UI/PageTitle';
import Highlight from './UI/Highlight';
import DownloadCV from './DownloadCV';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import bgVideo from '../assets/video/heroBG.mp4';

const Wrapper = styled('section')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.5)'
}));

const Background = styled('video')(({ theme }) => ({
  minWidth: '100%',
  minHeight: '100%',
  position: 'fixed',
  top: 0,
  zIndex: -9999
}));

const Content = styled('div')(({ theme }) => ({
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const ScrollDown = styled(ExpandMoreIcon)(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.primary.main,
}));

const Hero = () => {
  return (
    <Wrapper>
      <Background
        autoPlay
        muted
        loop
        src={bgVideo}
      />

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
  );
};

export default Hero;