import React, { useState, useEffect } from 'react';
import "./Group.css"
import "./Flashcards.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
      minHeight: 100
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

    buttonGroup: {
      // textAlign: 'center',
      // display: 'flex',
      // flexFlow: 'row nowrap',
      // justifyContent: 'space-between',
    }
});
export default function Flashcard(props) {
    const [expanded, setExpanded] = useState(false);
    console.log(props)

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    // return (
    //     <div>
    //         <p className="whiteWord">{props.question}</p>
    //         <p>{props.answer}</p>
    //         <Card className={classes.root}>
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary" gutterBottom>
    //                 Word of the Day
    //                 </Typography>
    //                 <Typography variant="h5" component="h2">
    //                 be{bull}nev{bull}o{bull}lent
    //                 </Typography>
    //                 <Typography className={classes.pos} color="textSecondary">
    //                 adjective
    //                 </Typography>
    //                 <Typography variant="body2" component="p">
    //                 well meaning and kindly.
    //                 <br />
    //                 {'"a benevolent smile"'}
    //                 </Typography>
    //             </CardContent>
    //             <CardActions>
    //                 <Button size="small">Learn More</Button>
    //             </CardActions>
    //         </Card>
    //     </div>
    // )

    return (
      <div className="flashcard-container">
        <Card className={classes.root}>
          <CardContent onClick={handleExpandClick}>
            {props.question}
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent onClick={handleExpandClick}>
              <Typography paragraph>{props.answer}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <Button size="small" color="primary">
                Repeat
              </Button>
              <Button size="small" color="primary">
                Easy
              </Button>
              <Button size="small" color="primary">
                Hard
              </Button> */}
              <ButtonGroup id="ButtonGroupCard" className={classes.buttonGroup} color="primary" aria-label="outlined primary button group">
                <Button>Repeat</Button>
                <Button>Easy</Button>
                <Button>Hard</Button>
              </ButtonGroup>
            </CardActions>
          </Collapse>
        </Card>
      </div>
    );
}