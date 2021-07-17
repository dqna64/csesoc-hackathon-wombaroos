import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StudyGroupButton from './StudyGroupButton';

export default function Home() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <StudyGroupButton />
        <StudyGroupButton />
        <StudyGroupButton />
        <StudyGroupButton />
      </Grid>
    </div>
  )
}