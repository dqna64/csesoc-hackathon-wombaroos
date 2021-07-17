import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const MyBox = styled(Box)({
  background: "#4568fe",
  border: 0,
  borderRadius: 10,
  color: 'white',
  height: 220,
  width: 220,
  margin: "36px",
  cursor: "pointer",
  textAlign: "center",
  lineHeight: 12,
});

export default function AddGroupButton(props) {
  const history = useHistory();

  return (
    <MyBox onClick={() => { history.push("/add-group") }}>
      <AddIcon style={{ fontSize: 80 }} />
    </MyBox>
  )
}