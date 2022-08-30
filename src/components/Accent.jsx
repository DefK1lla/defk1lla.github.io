import { styled } from '@mui/material/styles';

const Accent = styled('b')(({ theme }) => ({
  fontStyle: 'normal',
  color: theme.palette.primary.main,
}));

export default Accent;