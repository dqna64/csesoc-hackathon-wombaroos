import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StudyGroupButton from '../StudyGroupButton/StudyGroupButton';
import AddGroupButton from "../AddGroupButton/AddGroupButton";
import "./Home.css";
import {
  setItem,
  getItem,
  removeItem,
  setSessionItem,
  getSessionItem,
  removeSessionItem,
  getAllDecks,
  getDeckCards,
  getAllMembers,
  saveDeck,
  saveCard,
  saveGroup } from '../../Services/storage.js';

export default function Home() {
  // const [groups, setGroups] = useState([]);
  const groups = [];

  function fetchGroupNames() {
    const data = getItem('groups', []);
    let i;
    for (i = 0; i < data.length; i++) {
      // console.log(data[i]);
      groups.push(data[i].name);
    }
  }

  fetchGroupNames();

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