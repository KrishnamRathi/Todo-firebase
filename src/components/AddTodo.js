import React, { useContext, useState } from 'react'
import { Context as TodoContext } from '../redux/TodoContext'
import {  Button, TextField } from '@material-ui/core';
import './AddTodo.css';
import db from '../firebase'
import firebase from 'firebase'

function AddTodo() {
    const {  state, getTodo } = useContext(TodoContext);
    const [task, setTask] = useState("");

    function handleSubmit(){
        if(task!==""){
            db.collection('todos').doc(state.user.email).update({
                tasks: firebase.firestore.FieldValue.arrayUnion(task)
            })
            setTask("");
        }
    }

    return (
        <div className="add__todo">
                <TextField 
                    value={task}
                    className="input"
                    id="outlined-basic" 
                    label="Task" 
                    variant="outlined"
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => e.key==='Enter'? handleSubmit() : null}
                />
                
                <Button variant="outlined" 
                    className="button"
                    color="secondary"
                    onClick={() => handleSubmit()}
                >
                    Add Task
                </Button>
        </div>
    )
}

export default AddTodo
