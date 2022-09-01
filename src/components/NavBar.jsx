import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import { Box, Button, IconButton, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
}));

const DesktopMenu = styled('nav')(({ theme, direction = 'row' }) => ({
  display: 'flex',
  flexDirection: direction,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MenuLink = styled(ScrollLink)(({ theme }) => ({
  fontWeight: 600,
  '&.active': {
    color: theme.palette.primary.main
  }
}));

const MobileMenu = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: 250
  }
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

const DrawerBody = styled('nav')(({ theme }) => ({
  padding: theme.spacing(1, 0),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'cetner',
  alignItems: 'stretch'
}));

const NavBar = ({ items }) => {
  const [open, setOpen] = React.useState(false);

  const links = items.map(item =>
    <MenuLink
      key={item.title}
      activeClass='active'
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
      to={item.ref}
    >
      <Button
        variant='string'
      >
        {item.title}

      </Button>
    </MenuLink>
  );

  return (
    <Wrapper>
      <DesktopMenu>
        {links}
      </DesktopMenu>

      <MobileMenu>
        <IconButton
          onClick={e => setOpen(true)}
        >
          <MenuIcon
            fontSize='large'
            color='primary'
          />
        </IconButton>

        <DrawerContainer
          anchor='right'
          open={open}
        >
          <DrawerHeader>
            <IconButton
              onClick={e => setOpen(false)}
            >
              <ChevronRightIcon
                fontSize='large'
                color='primary'
              />
            </IconButton>
          </DrawerHeader>

          <Divider />

          <DrawerBody>
            {links}
          </DrawerBody>
        </DrawerContainer>
      </MobileMenu>
    </Wrapper>
  )
};

export default NavBar;