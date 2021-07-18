import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import './CreateStudyGroupButton'

const MyBox = styled(Box)({
  background: '#313752',
  border: 0,
  borderRadius: '8px',
  color: 'white',
  height: 100,
  width: 48,
  padding: '30px',
  cursor: "pointer"
});

export default function StudyGroupButton(props) {
  const history = useHistory();

  return (
    <MyBox className="CreateGroupButton" onClick={() => { history.push("/group") }}>
      <p>Create Group</p>
    </MyBox>
  )
}