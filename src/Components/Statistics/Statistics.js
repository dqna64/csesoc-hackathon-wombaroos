import React, { useState, useEffect } from 'react';
import "./Statistics.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
import moment from 'moment';

moment().format();

export default function Statistics(props) {
    const history = useHistory();

    const groupName = props.match.params.groupname;
    console.log(`this statistics page is for ${groupName}`)

    const returnButtonString = "<  Back to Deck";

    return (
        <div className="statistics-page">
            <h1>Group Statistics: {groupName}</h1>
            <div className="statistics-container">
                <div className="go-back-button">
                    <Button 
                        onClick={() => {
                            history.push("/group/" + groupName);
                        }}
                        variant="contained" 
                        color="primary"
                        >
                        {returnButtonString}
                    </Button>
                </div>
                <div>
                    graph one
                </div>
            </div>
        </div>
    )
}