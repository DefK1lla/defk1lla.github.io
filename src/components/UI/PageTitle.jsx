import { Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const PageTitle = styled(Typography)(({ theme }) => ({
  maxWidth: 900,
  marginBottom: 30,
  fontSize: '3rem',
  textAlign: 'center',
  color: theme.palette.common.white,
  lineHeight: 1.7,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  }
}));

export default PageTitle;