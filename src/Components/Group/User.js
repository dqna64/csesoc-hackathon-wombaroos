import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';

export default function User(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.contributions}</td>
            <td>{props.reviews}</td>
        </tr>
    )
}