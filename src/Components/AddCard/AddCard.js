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
    saveGroup } from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import "./AddCard.css";
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
import "./AddCard.css"

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  inputThing: {
    // paddingTop: 30,
  },
}));

function AddCard(props) {
    // const [cardTitle, setCardTitle] = useState(getSessionItem('currentCardTitle', ''));
    // const [card, setCard] = useState(getSessionItem('currentCardContent', ''));

    // function onChangeCardTitle(event) {
    //     setCardTitle(event.target.value);
    //     setSessionItem('currentCardTitle', event.target.value)
    // }

    // function onChangeCard(event) {
    //     setCard(event.target.value);
    //     setSessionItem('currentCardContent', event.target.value)
    // }

    // // Needs the group and deck from props in order to function properly.
    // function createCard() {
    //     let cardTitle = title.trim();
    //     if (cardTitle) {
    //         let card = { question: cardTitle, answer: card };
   
    //         let groups = getItem("groups");
    //         let i;
    //         for (i = 0; i < groups.length; i++) {
    //             if (groups[i].name == props.group) {
    //                 for (j = 0; j < groups[i].decks[j].length; j++) {
    //                     if (groups[i].decks[j] == props.deck) {                    
    //                         console.log("good");
    //                         groups[i].decks[j].push(card);
    //                     }
    //                 }
    //             }
    //         }
    //         setItem('groups', groups);
            
    //         //let storedCards = getItem('cards', []);

    //         //storedCards.push(array_card);
    //         //setItem('cards', storedCards);
    //         //props.setCards(storedCards);

    //         ////remove items from session storage when saving card
    //         //removeSessionItem('currentCardContent');
    //         //removeSessionItem('currentCardTitle');
    //     } else {
    //         alert('Please provide a title');
    //     }
    // }

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        // <div className="note">
        //     <form>
        //         <div className="form-group">
        //             <label htmlFor="title">Title</label>
        //             <input type="text"
        //                 className="form-control"
        //                 id="title"
        //                 placeholder="Title..."
        //                 value={getSessionItem('currentCardTitle', '')}
        //                 onChange={onChangeCardTitle} />
        //         </div>

        //         <div className="form-group">
        //             <label htmlFor="note-body">Content</label>
        //             <textarea className="form-control"
        //                 id="deck-body"
        //                 rows="12"
        //                value={getSessionItem('currentCardContent', '')}
        //                 onChange={onChangeCard}></textarea>
        //         </div>
        //     </form>

        //     <Link to="/" className="btn btn-success"
        //         onClick={createCard}>Save Card</Link>
        // </div>
        // id="outlined-basic" label="Outlined" variant="outlined"
        <div className="add-card">
            <Card id="CreateCardContainer" className="card-container">
                <CardContent>
                    <form className="create-deck-form">
                        <div className="form-group">
                            <div className="seperate">
                            <TextField
                                id="outlined-basic"
                                label="Question"
                                variant="outlined"
                                multiline
                                maxRows={4}
                                className={classes.inputThing}
                            ></TextField>
                            </div>
                            <div className="seperate">
                            <TextField
                                id="outlined-basic"
                                label="Answer"
                                variant="outlined"
                                className={classes.inputThing}
                            ></TextField>
                            </div>
                        </div>
                    </form>
                    <Button 
                        variant="outlined" 
                        className="create-deck-button">
                        Create Card
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default AddCard;

