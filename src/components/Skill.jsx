import { Tooltip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Title = styled('h3')(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: 15,
  fontSize: '1.7rem',
  fontWeight: 400,
  fontStyle: 'italic',
  color: theme.palette.primary.main,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-55%)',
    width: '60%',
    height: 2,
    background: theme.palette.primary.main
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}));

const Icons = styled(MouseParallaxContainer)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '0 -15px 15px',
}));

const IconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  margin: 15,
  display: 'flex',
  alignItems: 'cetner',
  justifyContent: 'center'
}));

const Icon = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: '100%'
}));

const Skill = ({ skill }) => {
  return (
    <div>
      <Title>
        {skill.title}
      </Title>

      <Icons
        direction='row'
        spacing={1}
      >
        {
          skill.items.map(item =>
            <MouseParallaxChild
              factorX={0.08} factorY={0.18}
            >
              <Tooltip
                key={item.title}
                title={item.title}
                enterTouchDelay={0}
                leaveTouchDelay={1500}
              >

                <IconWrapper>
                  <Icon
                    src={item.src}
                    alt={item.title}
                  />
                </IconWrapper>

              </Tooltip>
            </MouseParallaxChild>
          )
        }
      </Icons>
      <Divider />
    </div>
  );
};

export default Skill;