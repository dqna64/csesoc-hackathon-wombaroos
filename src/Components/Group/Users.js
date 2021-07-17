import React, { useState, useEffect } from 'react';
import { setItem, getItem, removeItem } from '../../Services/storage.js';
import { Table } from 'reactstrap';
import Box from '@material-ui/core/Box';
import "./Group.css"
import User from "./User"
import { Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";

export default function Users(props) {
    const history = useHistory();

    return (
        <div className='users-container'>
            <div className="users-header">
                <h2>Members</h2>
                <Button 
                    onClick={() => {
                        history.push("/statistics/" + props.parentGroup)
                    }}
                    variant="outlined" 
                    color="primary">
                    Statistics
                </Button>
            </div>
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