import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Marquee from "react-fast-marquee";

import SectionTitle from '../components/SectionTitle';
import Accent from '../components/Accent';

const Wrapper = styled('section')(({ theme }) => ({
  background: theme.palette.common.white,
}));

const Content = styled('div')(({ theme }) => ({
  padding: '50px 0'
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
  fontStyle: 'italic',
  color: theme.palette.common.white
}));

const About = () => {
  return (
    <Wrapper
      id='about'
    >
      <Container>
        <Content>
          <SectionTitle
            component='h2'
          >
            Обо мне
          </SectionTitle>

          <Text>
            Привет! Меня зовут Адоян Седрак и я веб-разработчик. Много учусь, а в остальное время подрабатываю на фрилансе. Окончил грузинский технический университет по специальности	&#171;Информатика&#187;. Ищу работу в компании, чтобы получить опыт командной разработки. Выполняю поставленные задачи качественно и в срок. Пролистайте страницу ниже, чтобы увидеть мои работы. <br />
            <Accent>Для меня важно, чтобы клиент остался доволен.</Accent>
          </Text>
        </Content>
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
            Развиваю свои навыки в различнных областях.
          </MarqueeText>
        </Marquee>

        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={20}
          direction='right'
        >
          <MarqueeText>
            Готов приступить к работе прямо сейчас!
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