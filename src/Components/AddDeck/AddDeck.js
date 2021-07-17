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
                cards: [],
            }

            let groups = getItem("groups");
            for (let i = 0; i < groups.length; i++) {
                if (groups[i].name == props.group) {
                    groups[i].decks.push(deck);
                }
            }

            setItem('groups', groups);

            //storedDecks.push(array_deck);
            //setItem('decks', storedDecks);
            //props.setDecks(storedDecks);

            ////remove items from session storage when saving deck
            //removeSessionItem('currentDeckTitle');
            i++;
            props.update(i);
        } else {
            alert('Please provide a title');
        }
    }

    return (
        <div className="deck">
            <form>
                <div className="form-group">
                    {/* <label htmlFor="title">Title</label>
                    {/* <input type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title..."
                        inputRef={deckTitleRef} 
                    />  */}
                    <TextField
                        label="Title"
                        inputRef={deckTitleRef}
                    ></TextField>
                </div>
            </form>
            <Button onClick={createDeck}>
                Create Deck
            </Button>
        </div>
    );
}

