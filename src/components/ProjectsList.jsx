import { Grid } from '@mui/material';

import ProjectCard from './ProjectCard';

const ProjectsList = ({ projects }) => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
    >
      {
        projects.map(project =>
          <Grid
            key={project.description}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <ProjectCard
              project={project}
            />
          </Grid>
        )
      }
    </Grid>
  );
};

export default ProjectsList;