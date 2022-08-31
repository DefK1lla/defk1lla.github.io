import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import GitHubIcon from '@mui/icons-material/GitHub';

const BtnWrapper = styled('div')(({ theme }) => ({
  margin: '15px 0',
  textAlign: 'center'
}));

const GitHubLink = ({ color = 'primary', variant = 'text' }) => {
  return (
    <BtnWrapper>
      <Button
        variant={variant}
        size='large'
        color={color}
        startIcon={<GitHubIcon />}
        href='https://github.com/DefK1lla'
        target='_blank'
      >
        GitHub
      </Button>
    </BtnWrapper>
  );
};

export default GitHubLink;