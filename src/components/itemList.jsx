import React from 'react';
//import Item from './Item';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
//import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({list, delItem}) => {

    return (
    <List>
        {list.forEach((item, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={item} />
                <ListItemSecondaryAction>
                    <IconButton
                    aria-label='Delete'
                    onClick={() => delItem(index)}>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
        )}
    </List>
    )
}

export default ItemList;