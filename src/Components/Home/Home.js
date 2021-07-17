import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StudyGroupButton from '../StudyGroupButton/StudyGroupButton';
import AddGroupButton from "../AddGroupButton/AddGroupButton";

const groups = ["1531 Study Group", "the bois", "Physics Class"];

export default function Home() {
  return (
    <div>
      <p>Which group would you like to join today?</p>
      <Grid container spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {
          groups.map((group) => {
            return <StudyGroupButton name={group}/>
          })
        }
        
      </Grid>
      <AddGroupButton />

      <p>Or create or join a group</p>
      <TextField id="outlined-basic" label="Enter invite link" variant="outlined" />
      <Button variant="contained">Join</Button>
    </div>
  )
}