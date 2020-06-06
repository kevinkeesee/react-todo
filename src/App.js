import React, {useState} from 'react';
import './App.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const App = () => {

  // array for all items
  const [list, setList] = useState([]);

  // temporary string for input
  const [inputVal, setInputVal] = useState('');

  // passing from input into an item
  const addItem = (text) => {
    const tempText = text.trim();
    if (tempText.length > 0){
      const tempList = [...list, {text}]
      setList(tempList);
      console.log(list)
    }
  }

  const delItem = (i) => {
    const tempList = list.filter((_, index) => index !== i);

    setList(tempList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Kevin Keesee's Todo List</h3>
      </header>

        <div>
          <form onSubmit={(e) => {
              e.preventDefault();
              addItem(inputVal);
              setInputVal('');
          }}
          className='form'>
              <TextField variant="outlined" margin="normal" placeholder='Enter something to do...' 
              value={inputVal} onChange={(val) => setInputVal(val.target.value)} />
          </form>
        </div>

      <List>
      {list.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary={todo.text} align='center'/>
          <ListItemSecondaryAction>
            <IconButton
            aria-label='Delete'
            onClick={() => {
              delItem(index);
            }} >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        ))}
      </List>
      
      <Button variant="outlined" onClick={() => {setList([])}}>Delete All</Button>
    </div>
  );
}

export default App;