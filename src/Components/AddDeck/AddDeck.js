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
        <div className="deck">
            <form className="create-deck-form">
                <div className="form-group">
                    <TextField
                        label="Title"
                        inputRef={deckTitleRef}
                    ></TextField>
                </div>
            </form>
            <Button 
                onClick={createDeck} 
                variant="outlined" 
                className="create-deck-button">
                Create Deck
            </Button>
        </div>
    );
}

