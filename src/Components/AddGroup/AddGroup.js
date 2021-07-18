import React, {useRef, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem, } from '../../Services/storage.js';
import "./AddGroup.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
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


const members = ["A", "B", "C", "D", "E"];

const useStyles = makeStyles({
    root: {
      minWidth: 275,
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



export default function AddGroup() {
    const titleRef = useRef("");
    const descriptionRef = useRef("");
    const history = useHistory();

    function createGroup() {
        const group = {
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            members: ["A", "B"],
            colour: "#1639B8",
            decks: [],
        }

        let groups = [group];
        let storedGroups = getItem('groups', []);
        groups.push(...storedGroups);
        setItem('groups', groups);
        history.push("/group/" + group.name);
    }

    const classes = useStyles();


    return (
        <div className="create-group-container">
            <Card className={classes.root}>
                <CardContent>
                    <div className="fields-container">
                        <p>Create Group</p>
                        <TextField
                            label="Title"
                            variant="outlined"
                            inputRef={titleRef}
                            className="whiteElement"
                        ></TextField>
                        <TextField
                            multiline={true}
                            rows={10}
                            variant="outlined"
                            label="Description"
                            inputRef={descriptionRef}
                            className="whiteElement"
                        >

                        </TextField>
                        <Button className="whiteElement" onClick={createGroup}>
                            Create Group
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}