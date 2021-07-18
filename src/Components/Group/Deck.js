import React, { useState, useEffect } from 'react';
import "./Group.css"
import "./Deck.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

moment().format();

const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };

export default function Deck(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className='deck-container'>

            <Card className='cardStyle' onClick={() => { history.push("/deck/" + props.group + "/" + props.name);console.log("/deck/" + props.group + "/" + props.name) }}>
                <CardActionArea className="centered">
                    {/* <CardMedia
                        image={'./tree.png'}
                        style={{height: 100, paddingTop: '56.25%'}}
                        title="Contemplative Reptile"
                    > */}
                       {/* <img src="tree.png" alt="deck thumbnail"/> */}
                    {/* </CardMedia> */}
                    <CardContent className="cardContent">
                    {/* <div className="divContain"> */}
                        <Typography variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Date created: {moment(props.dateCreated).format("MMM Do, YYYY")}
                        </Typography>
                      {/* </div> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}