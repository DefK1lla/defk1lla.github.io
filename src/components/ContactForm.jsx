import { Paper, TextField, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import Highlight from '../components/Highlight';

const Form = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  padding: '5px 25px 25px',
}));

const Title = styled('h3')(({ thene }) => ({
  fontSize: 22,
  fontWeight: 400,
  textAlign: 'center'
}));

const ContactForm = () => {
  return (
    <Form
      component='form'
    >
      <Title>
        <Highlight>Оставьте сообщение</Highlight> и я свяжусь с Вами.
      </Title>
      <Stack
        spacing={2}
      >
        <TextField
          label='Email'
          variant='standard'
          fullWidth
        />

        <TextField
          label='Сообщение'
          fullWidth
          multiline
          rows={4}
        />

        <Button
          type='submit'
          variant='contained'
        >
          Отправить
        </Button>
      </Stack>
    </Form>
  );
};

export default ContactForm;