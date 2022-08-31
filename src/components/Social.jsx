import { Paper, Tooltip, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Highlight from '../components/Highlight';

const Wrapper = styled(Paper)(({ theme }) => ({
  maxWidth: 450,
  padding: 25,
  background: alpha(theme.palette.common.black, 0.8)
}));

const Title = styled('h3')(({ theme }) => ({
  fontSize: 22,
  fontWeight: 400,
  color: theme.palette.common.white,
  textAlign: 'center'
}));

const Links = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'cetner'
}));

const Link = styled(IconButton)(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.primary.main
  }
}));

const items = [
  {
    title: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/defk1lla/'
  },
  {
    title: 'Facebook',
    icon: FacebookIcon,
    href: 'https://facebook.com/defk1lla'
  },
  {
    title: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/defk1lla/'
  },
  {
    title: 'Telegram',
    icon: TelegramIcon,
    href: 'https://t.me/defk1lla'
  },
];

const Social = () => {
  return (
    <Wrapper>
      <Title>
        Или <Highlight>напишите</Highlight> в удобной Вам соц-сети.
      </Title>

      <Links>
        {
          items.map(item =>
            <Tooltip
              key={item.title}
              title={item.title}
              enterTouchDelay={0}
              leaveTouchDelay={1500}
            >
              <Link
                href={item.href}
                target='_blank'
              >
                <item.icon
                  fontSize='large'
                />
              </Link>
            </Tooltip>
          )
        }
      </Links>
    </Wrapper>
  );
};

export default Social;