import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Deck from "./Deck"
import "./Group.css"
import {AddDeck} from "../AddDeck/AddDeck"

export default function Decks(props) {
    const [blah, setBlah] = useState(0);
    const decks = [];

    function fetchDeckNames() {
        const data = getItem('groups', []);
        let i;
        for (i = 0; i < data.length; i++) {
            if (data[i].name == props.parentGroup) {
                let j;
                for (j = 0; j < data[i].decks.length; j++) {
                    decks.push(data[i].decks[j]);
                }
            }
        }
    }

    fetchDeckNames();

    return (
        <div className='decks-container'>
            <div className="add-deck">
                <AddDeck group={props.parentGroup} update={setBlah}/>
            </div>
            {decks.map((deck) => (<Deck
                name={deck.name}
                group={props.parentGroup}
                // dateCreated={deckData.dateCreated}
                image="/tree-image.jpg"
            />))}
        </div>
    );
}