import React from "react";

import { AppBar, Container, Toolbar, IconButton } from '@mui/material';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { styled } from '@mui/material/styles';

import NavBar from '../components/NavBar';

import navItems from '../content/nav.json';

const Appbar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none'
}));

const Logo = styled(CodeOffIcon)(({ theme }) => ({
  fontSize: '45px',
  color: theme.palette.primary.main,
}));

const Header = () => {
  return (
    <Appbar
      component='header'
      position='fixed'
    >
      <Container>
        <Toolbar>
          <IconButton>
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