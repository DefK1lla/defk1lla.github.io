import React from 'react';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Zoom
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled, alpha } from '@mui/material/styles';

const CardBody = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  background: alpha(theme.palette.common.black, 0.6),
  color: theme.palette.common.white
}));

const Media = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 225,
}));

const CardPreview = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: '100%'
}));

const CardOverlay = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: alpha(theme.palette.common.black, 0.9),
  color: theme.palette.common.white
}));


const OverlayContent = styled(CardContent)(({ theme }) => ({
  height: '100%',
  padding: '5px 15px 0',
  marginBottom: -15
}));

const Actions = styled(CardActions)(({ theme }) => ({
  padding: '14px 15px',
  display: 'flex',
  justifyContent: 'space-around',
  background: theme.palette.common.black
}));

const ProjectCard = ({ project }) => {
  const [isOverlay, setIsOverlay] = React.useState(false);
  return (
    <CardBody
      onMouseEnter={e => setIsOverlay(true)}
      onMouseLeave={e => setIsOverlay(false)}
    >
      <Media>
        <CardPreview
          component='img'
          image={project.img}
        />
      </Media>

      <CardContent>
        <Typography
          variant='h5'
          component='h3'
        >
          {project.title}
        </Typography>
      </CardContent>


      <Zoom
        in={isOverlay}
      >
        <CardOverlay>
          <CardHeader
            title={project.title}
            subheader={
              <Typography
                component='div'
              >
                {project.type}
              </Typography>
            }
          />

          <OverlayContent>
            <Typography
              paragraph
            >
              {project.description}
            </Typography>

            <Typography
              component='h4'
            >
              <b>Стэк:</b>
            </Typography>

            <Typography>
              {project.stack}
            </Typography>
          </OverlayContent>

          <Actions>
            <Button
              size='small'
              variant='string'
              startIcon={<PreviewIcon />}
              href={project.preview}
              target='_blank'
            >
              Превью
            </Button>
            <Button
              size='small'
              variant='string'
              startIcon={<GitHubIcon />}
              href={project.github}
              target='_blank'
            >
              Код
            </Button>
          </Actions>
        </CardOverlay>
      </Zoom>
    </CardBody>
  );
};

export default ProjectCard;