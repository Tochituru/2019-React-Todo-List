import React from 'react';

import { List, ListItem, ListItemText, Button } from '@material-ui/core'

const TaskList = ({ title, data, changeStatus, deleteTask, editTask }) => {
    return (
        <List>
            <h2>{title}</h2>
            {data.reverse().map((e, i) => (
                <ListItem button key={i} >
                    <ListItemText onClick={() => changeStatus(e.id)}>{e.text} </ListItemText>
                    <Button variant={"contained"} onClick={() => deleteTask(e.id)}>
                        X
                    </Button>
                    <Button variant={"contained"} onClick={() => editTask(e.id)}>
                        Edit
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default TaskList