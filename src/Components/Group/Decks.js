import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';

export default function Decks(props) {
    return (
        <div className='decks-container'>
            Im the decks container
        </div>
    );
}