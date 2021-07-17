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
import "./StudyGroupButton.css";

const MyBox = styled(Box)({
  
});

export default function StudyGroupButton(props) {
  const history = useHistory();

  return (
    <Box className="GroupButton" onClick={() => { history.push("/group/" + props.name) }}>
      <div className="group-button-title">{props.name}</div>
    </Box>
  )
}