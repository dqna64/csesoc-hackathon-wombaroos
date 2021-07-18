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
import "./AddGroupButton.css";

const MyBox = styled(Box)({

});

export default function AddGroupButton(props) {
  const history = useHistory();

  return (
    <MyBox className="AddGroupButton" onClick={() => { history.push("/add-group") }}>
      <AddIcon className="AddGroupIcon" style={{ fontSize: 80 }} />
    </MyBox>
  )
}