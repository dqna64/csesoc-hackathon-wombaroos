import React, {useRef, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem, } from '../../Services/storage.js';

export default function AddGroup() {
    const titleRef = useRef("");

    function saveGroup() {
        console.log(titleRef.current.value);
        let groups = [titleRef.current.value];
        let storedGroups = getItem('groups', []);
        groups.push(...storedGroups);
        console.log(groups);
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
                >

                </TextField>
                <Button onClick={saveGroup}>
                    Create Group
                </Button>
            </Grid>
        </div>
    )
}