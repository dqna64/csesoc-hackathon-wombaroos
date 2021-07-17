import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StudyGroupButton from '../StudyGroupButton/StudyGroupButton';
import AddGroupButton from "../AddGroupButton/AddGroupButton";
import "./Home.css";
import {
  loadDummyData,
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
  saveGroup,
  fetchGroupNames
} from '../../Services/storage.js';

export default function Home() {

  // loadDummyData();
  let groups = [];
  groups = fetchGroupNames();

  return (
    <div className="home-page-container">
      <div className="group-container">
        {groups.map((group) => <StudyGroupButton name={group}/>)}
        <AddGroupButton/>

        
      </div>
      <div>
        <p>Or create or join a group</p>

        <TextField id="outlined-basic" label="Enter invite link" variant="outlined"/>
        <Button variant="contained">Join</Button>
      </div>
    </div>
  )
}