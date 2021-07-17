import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Deck from "./Deck"

export default function Decks(props) {
    return (
        <div className='decks-container'>
            {props.decksData.map((deckData) => (<Deck
                name={deckData.name}
                dateCreated={deckData.dateCreated}
            />))}
        </div>
    );
}