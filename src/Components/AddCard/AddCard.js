import React, { useState } from 'react';
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

function AddCard(props) {
    const [cardTitle, setCardTitle] = useState(getSessionItem('currentCardTitle', ''));
    const [card, setCard] = useState(getSessionItem('currentCardContent', ''));

    function onChangeCardTitle(event) {
        setCardTitle(event.target.value);
        setSessionItem('currentCardTitle', event.target.value)
    }

    function onChangeCard(event) {
        setCard(event.target.value);
        setSessionItem('currentCardContent', event.target.value)
    }

    // Needs the group and deck from props in order to function properly.
    function createCard() {
        let cardTitle = title.trim();
        if (cardTitle) {
            let card = { question: cardTitle, answer: card };
   
            let groups = getItem("groups");
            let i;
            for (i = 0; i < groups.length; i++) {
                if (groups[i].name == props.group) {
                    for (j = 0; j < groups[i].decks[j].length; j++) {
                        if (groups[i].decks[j] == props.deck) {                    
                            console.log("good");
                            groups[i].decks[j].push(card);
                        }
                    }
                }
            }
            setItem('groups', groups);
            
            //let storedCards = getItem('cards', []);

            //storedCards.push(array_card);
            //setItem('cards', storedCards);
            //props.setCards(storedCards);

            ////remove items from session storage when saving card
            //removeSessionItem('currentCardContent');
            //removeSessionItem('currentCardTitle');
        } else {
            alert('Please provide a title');
        }
    }

    return (
        <div className="note">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title..."
                        value={getSessionItem('currentCardTitle', '')}
                        onChange={onChangeCardTitle} />
                </div>

                <div className="form-group">
                    <label htmlFor="note-body">Content</label>
                    <textarea className="form-control"
                        id="deck-body"
                        rows="12"
                       value={getSessionItem('currentCardContent', '')}
                        onChange={onChangeCard}></textarea>
                </div>
            </form>

            <Link to="/" className="btn btn-success"
                onClick={createCard}>Save Card</Link>
        </div>
    );
}

export default AddCard;

