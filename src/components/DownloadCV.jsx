import { Button } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';

const DownloadCV = ({ color = 'primary', variant = 'text' }) => {
  return (
    <Button
      variant={variant}
      size='large'
      color={color}
      startIcon={<DownloadIcon />}
      href='./assets/cv/cv.pdf'
      download='SedrakAdoyan.pdf'
    >
      Скачать резюме
    </Button>
  );
};

export default DownloadCV;