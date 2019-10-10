import React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core'

const TaskList = ({data}) => {
    return (
        <List>
            {data.map((e, i) => (
                <ListItem button key={i}>
                    <ListItemText>{e.text}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

export default TaskList