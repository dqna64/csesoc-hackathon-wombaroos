import React, { useState, useEffect } from 'react';
import "./Group.css"
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
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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

            <Card className='' onClick={() => { history.push("/deck/" + props.group + "/" + props.name);console.log("/deck/" + props.group + "/" + props.name) }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        // image="../../../public/assets/deck-images/tree-image.jpg"
                        // image={require('tree-image.jpg')}
                        title="Contemplative Reptile"
                        styles={styles.media}
                    >
                        {/* <img src="tree-image.jpg" alt="deck thumbnail"/> */}
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Date created:{props.dateCreated}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}