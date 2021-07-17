import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StudyGroupButton from '../StudyGroupButton/StudyGroupButton';
import AddGroupButton from "../AddGroupButton/AddGroupButton";
import "./Home.css";

const groups = ["1531 Study Group", "the bois", "Physics Class"];

export default function Home() {
  return (
    <div>
    <div className="group-container">
      {groups.map((group) => <StudyGroupButton name={group}/>)}
      <AddGroupButton/>

      
    </div>
    <div>
      <p>Or create or join a group</p>
      <TextField id="outlined-basic" label="Enter invite link" variant="outlined" />
      <Button variant="contained">Join</Button>
    </div>
    </div>
  )
}