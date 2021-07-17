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
import BarChart from './BarChart'
import moment from 'moment';

moment().format();

export default function Statistics(props) {
    const history = useHistory();

    const groupName = props.match.params.groupname;
    console.log(`this statistics page is for ${groupName}`)

    const returnButtonString = "<  Back to Deck";

    const usersData = getAllMembers(groupName);
    const userNames = [usersData.map((user) => (
        user.name
    ))];
    const userContributions = [usersData.map((user) => (
        user.contributions
    ))];
    console.log(userNames);
    console.log(userContributions);


    return (
        <div className="statistics-page">
            <h1 className="statistics-page-title">Group Statistics: {groupName}</h1>
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
                    <BarChart 
                        categories={userNames}
                        data={userContributions}
                    />
                </div>
            </div>
        </div>
    )
}