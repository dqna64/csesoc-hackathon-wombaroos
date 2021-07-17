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

const MyBox = styled(Box)({
  background: '#313752',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: "50%",
  width: "25%",
  cursor: "pointer"
});

export default function StudyGroupButton(props) {
  const history = useHistory();

  return (
    <MyBox onClick={() => { history.push("/group") }}>
      <p>{props.name}</p>
    </MyBox>
  )
}