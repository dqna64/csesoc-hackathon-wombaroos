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
  borderRadius: 10,
  color: 'white',
  height: 200,
  width: 200,
  margin: "10px",
  cursor: "pointer",
  textAlign: "center",
  lineHeight: 12,
});

export default function StudyGroupButton(props) {
  const history = useHistory();

  return (
    <MyBox onClick={() => { history.push("/group") }}>
      <p>{props.name}</p>
    </MyBox>
  )
}