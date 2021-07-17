import React, {useRef, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem, } from '../../Services/storage.js';
import "./AddGroup.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";

const members = ["A", "B", "C", "D", "E"];


export default function AddGroup() {
    const titleRef = useRef("");
    const descriptionRef = useRef("");
    const history = useHistory();

    function createGroup() {
        const group = {
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            members: ["A", "B"],
            colour: "#1639B8",
            decks: [],
        }

        let groups = [group];
        let storedGroups = getItem('groups', []);
        groups.push(...storedGroups);
        setItem('groups', groups);
        history.push("/group/" + group.name);
    }

    return (
        <div className="create-group-container">
            
            <p>Create Group</p>
            <TextField
                label="Title"
                inputRef={titleRef}
                className="whiteElement"
            ></TextField>
            <TextField
                multiline={true}
                rows={10}
                label="Description"
                inputRef={descriptionRef}
                className="whiteElement"
            >

            </TextField>
            <Button className="whiteElement" onClick={createGroup}>
                Create Group
            </Button>
            
        </div>
    )
}