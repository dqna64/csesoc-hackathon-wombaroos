import React, { useState } from 'react';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem, } from '../../Services/storage.js';
import { Link } from 'react-router-dom';

function AddNote(props) {
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

    function saveCard() {
        let cardTitle = title.trim();
        if (cardTitle) {
            let array_card = [cardTitle, card];

            // !!!! change to reflect structure of the local storage !!!!
            let storedCards = getItem('cards', []);

            storedCards.push(array_card);
            setItem('cards', storedCards);
            props.setCards(storedCards);

            //remove items from session storage when saving card
            removeSessionItem('currentCardContent');
            removeSessionItem('currentCardTitle');
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
                        id="note-body"
                        rows="12"
                        value={getSessionItem('currentCardContent', '')}
                        onChange={onChangeCard}></textarea>
                </div>
            </form>

            <Link to="/" className="btn btn-success"
                onClick={saveCard}>Save Card</Link>
        </div>
    );
}

export default AddCard;

