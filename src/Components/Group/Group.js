import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import Users from "./Users";
import Decks from "./Decks";

const data = [
    {
        "name": "Cameron",
        "contributions": 92,
        "reviews": 462,
    },
    {
        "name": "Danil",
        "contributions": 90,
        "reviews": 501,
    },
    {
        "name": "Dominic",
        "contributions": 88,
        "reviews": 508,
    },
    {
        "name": "Joseph",
        "contributions": 85,
        "reviews": 512,
    },
    {
        "name": "Gordon",
        "contributions": 81,
        "reviews": 353,
    },
];

export default function Group(props) {

    //let new_array = Array.from(props.decks);

    //function deleteDeck(index) {
    //    new_array.splice(index, 1);
    //    props.setDecks(new_array);
    //}

    //function renderData() {

    //    let items = [];
    //    for (let i = 0; i < props.decks.length; i++) {
    //        function onDeckDelete() {
    //            deleteDeck(i);
    //        }
    //        items.push(
    //            <Deck 
    //                index={i}
    //                key={i}
    //                title={props.decks[i][0]}
    //                onDeckDelete={onDeckDelete}
    //            />
    //        );
    //    }

    //    setDeck('decks', props.decks);

    //    return items;
    //}



    // ########### -----TO ADD

    //<div className="deckBoard">
    //    <div className="list">
    //        {renderData()}
    //    </div>
    //</div>

    return (
        <div className='group-container'>
            <Users usersData={data} />
            <Decks />
            
        </div>
    );  
} 


const groupCcontainerStyles = {
        color: 'turquoise',
        backgroundColor: 'navy',
    }
