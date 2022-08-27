import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  background: theme.palette.primary.main
}));

const MarqueeTrack = styled('marquee')(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.palette.common.white
}));

const MarqueeText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  margin: '0 25px'
}));

const Marquee = () => {
  return (
    <Wrapper>
      <MarqueeTrack
        behavior='slide'
      >
        <MarqueeText>
          C радостью примусь за ваш заказ!
        </MarqueeText>

        <MarqueeText>
          Сделаю все качественно и в указанный срок!
        </MarqueeText>

        <MarqueeText>
          Постоянно совершенствую свои навыки!
        </MarqueeText>

        <MarqueeText>
          Обожаю покорять новые вершины!
        </MarqueeText>
      </MarqueeTrack>
    </Wrapper>
  );
};

export default Marquee;