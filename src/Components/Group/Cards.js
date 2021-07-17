import React from "react";
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import FlashCard f./Flashcard/Card";
import "./Cards.css";



export default function Cards(props) {
    const cards = [];

    const groupName = props.match.params.groupname;
    const deckName = props.match.params.deckname;

    function fetchCardNames() {
        const data = getItem('groups', []);
        let i;
        for (i = 0; i < data.length; i++) {
            if (data[i].name == groupName) {
                let j;
                for (j = 0; j < data[i].decks.length; j++) {
                    if (data[i].decks[j].name == deckName) {
                        for (let k = 0; k < data[i].decks[j].cards.length; k++) {
                            cards.push(data[i].decks[j].cards[k]);
                        }
                    }
                }
            }
        }
    }

    fetchCardNames();

    console.log(cards);
    console.log(groupName, deckName);

    return (
        <div>
            <div className="deck-title">
                Deck Name: {deckName}
            </div>
            <p>Start Revision</p>
            {cards.map((card) => (<FlashCard 
                question={card.question}
                answer={card.answer}
                className="cardStuff"    
            />))}
        </div>
    )
}