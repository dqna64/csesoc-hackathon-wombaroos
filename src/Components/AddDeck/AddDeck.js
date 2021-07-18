import React, { useState, useRef } from 'react';
import {
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
    saveGroup
} from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import "./AddDeck.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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


let i = 0;

export function AddDeck(props) {
    const deckTitleRef = useRef("");

    function createDeck() {
        let deckTitle = deckTitleRef.current.value;
        if (deckTitle) {
            let deck = {
                name: deckTitle,
                dateCreated: "2021-07-18",
                cards: [],
            }

            let groups = getItem("groups");
            for (let i = 0; i < groups.length; i++) {
                if (groups[i].name == props.group) {
                    groups[i].decks.push(deck);
                }
            }

            setItem('groups', groups);
            i++;
            props.update(i);
            deckTitleRef.current.value = ""
        } else {
            alert('Please provide a title');
        }
    }

    return (
        <div className="ddeck">
                <div className="create-deck-button">
                    <form className="create-deck-form">
                        <div className="form-group">
                            <TextField
                                label="Title"
                                inputRef={deckTitleRef}
                            ></TextField>
                        </div>
                    </form>
                </div>
                    <Button 
                        onClick={createDeck} 
                        variant="outlined" 
                        className="create-deck-button">
                        Create Deck
                    </Button>


        </div>
    );
}

