import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import Box from '@material-ui/core/Box';
import "./Users.css"
import User from "./User"

export default function Users(props) {
    return (
        <div className='users-container'>
            <Box borderRadius={16}>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contributions</th>
                            <th>Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.usersData.map((userData) => (<User 
                            name={userData.name}
                            contributions={userData.contributions}
                            reviews={userData.reviews}
                        />))}
                    </tbody>
                </Table>
            </Box>
        </div>
    );
}