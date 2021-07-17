import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import "./Users.css"
import User from "./User"

export default function Users(props) {
    return (
        <div className='users-container'>
            {props.usersData.map((userData) => (<User 
                name={userData.name}
                contributions={userData.contributions}
                reviews={userData.reviews}
            />))}
        </div>
    );
}