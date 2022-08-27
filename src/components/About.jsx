import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Marquee from "react-fast-marquee";

import SectionTitle from './UI/SectionTitle';
import Accent from './UI/Accent';

const Wrapper = styled('section')(({ theme }) => ({
  padding: '50px 0 0',
  background: theme.palette.common.white,
}));

const Text = styled(Typography)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto 50px',
  textAlign: 'center'
}));

const MarqueeTrack = styled('div')(({ theme }) => ({
  padding: '10px 0',
  background: theme.palette.primary.main
}));

const MarqueeText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  margin: '5px 30px',
  fontSize: '1.4rem',
  color: theme.palette.common.white
}));

const About = () => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle
          component='h2'
        >
          Обо мне
        </SectionTitle>

        <Text>
          Меня зовут Адоян Седрак и я веб-разработчик. Много учусь, а в свободное время подрабатываю на фрилансе. Окончил грузинский технический университет по специальности	&#171;Информатика&#187;. Ищу работу в компании, чтобы получить опыт командной разработки. Выполняю поставленные задачи качественно и в срок. Пролистайте страницу ниже, чтобы увидеть мои работы. <br />
          <Accent>Для меня важно, чтобы клиент остался доволен.</Accent>
        </Text>
      </Container>

      <MarqueeTrack>
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={20}
          direction='left'
        >
          <MarqueeText>
            Самомотивирован и всегда готов совершенствоваться.
          </MarqueeText>

          <MarqueeText>
            Держу себя в курсе последних технологий.
          </MarqueeText>

          <MarqueeText>
            Хочу иметь обширный набор навыков в разных областях.
          </MarqueeText>
        </Marquee>

        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={20}
          direction='right'
        >
          <MarqueeText>
            C радостью примусь за ваш заказ!
          </MarqueeText>

          <MarqueeText>
            Сделаю все качественно и в указанный срок!
          </MarqueeText>

          <MarqueeText>
            Моя цель - предоставлять лучшую услугу на рынке!
          </MarqueeText>
        </Marquee>
      </MarqueeTrack>
    </Wrapper>
  );
};

export default About;