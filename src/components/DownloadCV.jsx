import { Button } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';

import cv from '../assets/cv/cv.pdf';

const DownloadCV = () => {
  return (
    <Button
      variant='text'
      size='large'
      startIcon={<DownloadIcon />}
      href={cv}
      download='SedrakAdoyan.pdf'
    >
      Скачать резюме
    </Button>
  );
};

export default DownloadCV;