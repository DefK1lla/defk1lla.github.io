import { styled } from '@mui/material/styles';

const Accent = styled('i')(({ theme }) => ({
  padding: '0 0.2em',
  fontStyle: 'normal',
  background: theme.palette.primary.main,
  borderRadius: 7
}));

export default Accent;