import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const BtnWrapper = styled('div')(({ theme }) => ({
  margin: '15px 0',
  textAlign: 'center'
}));

const GitHubLink = () => {
  return (
    <BtnWrapper>
      <Button
        variant='text'
        size='large'
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