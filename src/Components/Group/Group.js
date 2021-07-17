import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./Group.css"
import Users from "./Users";
import Decks from "./Decks";
import {
    loadDummyData,
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
    saveGroup,
    fetchGroupNames
  } from '../../Services/storage.js';


// const usersData = [
//     {
//         "name": "Cameron",
//         "contributions": 92,
//         "reviews": 462,
//     },
//     {
//         "name": "Danil",
//         "contributions": 90,
//         "reviews": 501,
//     },
//     {
//         "name": "Dominic",
//         "contributions": 88,
//         "reviews": 508,
//     },
//     {
//         "name": "Joseph",
//         "contributions": 85,
//         "reviews": 512,
//     },
//     {
//         "name": "Gordon",
//         "contributions": 81,
//         "reviews": 353,
//     },
// ];

// const decksData = [
//     {
//         "name": "Trees",
//         "dateCreated": "2021-07-13",
//     },
//     {
//         "name": "Graphs",
//         "dateCreated": "2021-07-14",
//     },
//     {
//         "name": "Sorting Algorithms",
//         "dateCreated": "2021-07-16",
//     },
// ];

export default function Group(props) {
    const groupName = props.match.params.groupname;
    //let new_array = Array.from(props.decks);

    //function deleteDeck(index) {
    //    new_array.splice(index, 1);
    //    props.setDecks(new_array);
    //}

    // let deckArray = []
    // let groups = getItem("groups");
    // for (const group in groups){
    //     if (group.name == groupName) {
    //         deckArray = group.decks
    //     }
    // }

    // function renderData() {

    //     let items = [];
    //     for (let i = 0; i < deckArray.length; i++) {
    //         function onDeckDelete() {
    //             deleteDeck(i);
    //         }
    //         items.push(
    //             <Deck 
    //                 index={i}
    //                 key={i}
    //                 title={deckArray[i].name}
    //                 onDeckDelete={onDeckDelete}
    //             />
    //         );
    //     }

    //     setDeck('decks', props.decks);

    //     return items;
    // }



    // ########### -----TO ADD

    
    console.log(groupName);
    const decksData = getAllDecks(groupName);
    const usersData = getAllMembers(groupName);
    console.log(decksData);
    console.log(usersData);

    return (
        <div className='group-page-container'>
            <div className='group-title'>
                <h1>Group Name: {groupName}</h1>
            </div>
            <div className='group-contents'>
                <Users usersData={usersData} />
                <Decks
                    decksData={decksData}
                    parentGroup={groupName}
                />
            </div>
            {/* <div className="deckBoard">
                <div className="list">
                    {renderData()}
                </div>
            </div> */}
        </div>
    );  
} 