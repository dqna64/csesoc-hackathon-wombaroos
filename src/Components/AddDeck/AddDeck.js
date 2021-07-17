import React, { useState } from 'react';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem, } from '../../Services/storage.js';
import { Link } from 'react-router-dom';

function AddDeck(props) {
    const [deckTitle, setDeckTitle] = useState(getSessionItem('currentDeckTitle', ''));

    function onChangeDeckTitle(event) {
        setDeckTitle(event.target.value);
        setSessionItem('currentDeckTitle', event.target.value)
    }

    function saveDeck() {
        let deckTitle = deckTitle.trim();
        if (deckTitle) {
            let array_deck = [deckTitle];
            let storedDecks = getItem('decks', []);
            storedDecks.push(array_deck);
            setItem('decks', storedDecks);
            props.setDecks(storedDecks);

            //remove items from session storage when saving deck
            removeSessionItem('currentDeckTitle');
        } else {
            alert('Please provide a title');
        }
    }

    return (
        <div className="deck">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title..."
                        value={getSessionItem('currentDeckTitle', '')}
                        onChange={onChangeDeckTitle} />
                </div>
            </form>

            <Link to="/" className="btn btn-success"
                onClick={saveDeck}>Save Deck</Link>

        </div>
    );
}

export default AddDeck;

