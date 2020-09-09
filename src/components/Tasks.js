import React, { useContext, useEffect, useState } from 'react'
import { List, ListItem, ListItemSecondaryAction, ListItemText, IconButton, Divider } from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import { Context as TodoContext } from '../redux/TodoContext'
import './Tasks.css';
import db from '../firebase'
import firebase from 'firebase';

function Tasks() {
    const {state, getTodos, deleteFromState} = useContext(TodoContext);
    useEffect(() => {
        getTodos(state.user.email);
    }, [])

    const deleteTodo = (task) =>{
        db.collection('todos').doc(state.user.email).update({
            tasks: firebase.firestore.FieldValue.arrayRemove(task)
        })
        deleteFromState(task);
    }

    return (
        <div className="tasks">
            <List>
                { state.tasks? state.tasks.map((todo) => (
                    <div key={todo}>
                        <ListItem className="list" button>
                            <ListItemText>{todo}</ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => deleteTodo(todo)} >
                                        <Delete color="secondary" />
                                    </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                    </div>
                )): null}
            </List>
            
        </div>
    )
}

export default Tasks
