import React, {useRef, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem, } from '../../Services/storage.js';

const members = ["A", "B", "C", "D", "E"];


export default function AddGroup() {
    const titleRef = useRef("");
    const descriptionRef = useRef("");

    function saveGroup() {
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
    }

    return (
        <div>
            <Grid
                direction="row"
            >
                <p>Create Group</p>
                <TextField
                    label="Title"
                    inputRef={titleRef}
                ></TextField>
                <TextField
                    multiline={true}
                    rows={10}
                    label="Description"
                    inputRef={descriptionRef}
                >

                </TextField>
                <Button onClick={saveGroup}>
                    Create Group
                </Button>
            </Grid>
        </div>
    )
}