import React from "react";

import { AppBar, Container, Toolbar } from '@mui/material';
import CodeOffIcon from '@mui/icons-material/CodeOff';

import { styled } from '@mui/material/styles';

const Appbar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none'
}));

const Logo = styled(CodeOffIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '45px'
}));

const Header = () => {
  return (
    <Appbar
      component='header'
      position='fixed'
    >
      <Container>
        <Toolbar>
          <Logo />
        </Toolbar>
      </Container>
    </Appbar>
  );
};

export default Header;