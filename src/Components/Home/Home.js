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


loadDummyData();


export default function Home() {

  let groupsNames = [];
  groupsNames = fetchGroupNames();

  return (
    <div className="home-page-container">
      <h1 className="groupTitle">Groups</h1>
      <div className="group-container">
        {groupsNames.map((group) => <StudyGroupButton name={group}/>)}
        <AddGroupButton className="AddGroupButton"/>
      </div>
      <div className="joingroupBut">
        <TextField id="outlined-basic" label="Enter invite link" variant="outlined" >
        <Button variant="contained">Join Group</Button>
        </TextField>
      </div>
    </div>
  )
}