import React from 'react';

import { Paper, TextField, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useForm } from 'react-hook-form';
import axios from 'axios';

import Highlight from '../components/Highlight';

const Wrapper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  height: 450,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: '10px 25px 25px',
}));

const Title = styled('h3')(({ thene }) => ({
  fontSize: 22,
  fontWeight: 400,
  textAlign: 'center'
}));

const ContactForm = () => {
  const [success, setSuccess] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    mode: 'onSubmit'
  });

  const onSubmit = async data => {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL, data);
      setSuccess(res.data.success);
    } catch (e) {
      console.log(e);
      setSuccess(false);
    }
  };

  if (success) {
    return (
      <Wrapper>
        <Title>
          <Highlight>Данные получены.</Highlight> Дождитесь письма по электронной почте.
        </Title>
      </Wrapper>
    );
  } else if (success === null) {
    return (
      <Wrapper
        component='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title>
          <Highlight>Оставьте сообщение</Highlight> и я свяжусь с Вами.
        </Title>
        <Stack
          spacing={1}
        >
          <TextField
            label='Имя'
            type='text'
            variant='standard'
            fullWidth
            {...register('name', {
              required: 'Введите имя!'
            })}
            error={Boolean(errors?.name?.message)}
            helperText={errors?.name?.message}
          />

          <TextField
            label='Email'
            type='email'
            variant='standard'
            fullWidth
            {...register('email', {
              required: 'Введите E-Mail!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Введите корректный E-Mail!'
              }
            })}
            error={Boolean(errors?.email?.message)}
            helperText={errors?.email?.message}
          />

          <TextField
            label='Сообщение'
            type='text'
            variant='standard'
            fullWidth
            multiline
            rows={4}
            {...register('message')}
          />

          <Button
            type='submit'
            variant='contained'
            formNoValidate

          >
            Отправить
          </Button>
        </Stack>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Title>
          <Highlight>Ошибка.</Highlight> Попробуйте позже.
        </Title>
      </Wrapper>
    );
  }
};

export default ContactForm;