import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionTitle = styled(Typography)(({ theme, variant }) => {
  const color = variant === 'secondary'
    ? theme.palette.common.white
    : variant === 'tertiary'
      ? theme.palette.primary.main
      : theme.palette.common.black;

  return {
    display: 'inline-block',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: 25,
    fontSize: '2rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    color,
    borderBottom: `4px double ${color}`,
  }
});

export default SectionTitle;