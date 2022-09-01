import React from "react";

import { animateScroll as scroll } from 'react-scroll';

import { AppBar, Container, Toolbar, IconButton } from '@mui/material';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { styled, alpha } from '@mui/material/styles';

import NavBar from '../components/NavBar';

import navItems from '../content/nav.json';

const Appbar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  transition: 'background 0.3s ease',
  '&.active': {
    background: alpha(theme.palette.common.black, 0.7),
    backdropFilter: 'blur(5px)'
  }
}));

const Logo = styled(CodeOffIcon)(({ theme }) => ({
  fontSize: '45px',
  color: theme.palette.primary.main,
}));

const Header = () => {
  const [active, setActive] = React.useState(false);
  const ref = React.useRef(null);

  const handleScroll = e => {
    if (window.scrollY > ref.current?.clientHeight) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Appbar
      className={active ? 'active' : ''}
      component='header'
      position='fixed'
      ref={ref}
    >
      <Container>
        <Toolbar>
          <IconButton
            onClick={scroll.scrollToTop}
          >
            <Logo />
          </IconButton>

          <NavBar
            items={navItems}
          />
        </Toolbar>
      </Container>
    </Appbar>
  );
};

export default Header;