import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';

export default function User(props) {
    return (
        <div>
            {props.name} {props.contributions} {props.reviews}
        </div>
    )
}