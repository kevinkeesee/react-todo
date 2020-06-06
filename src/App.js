import React, {useState} from 'react';
import Input from './components/Input'
import ItemList from './components/itemList';
import './App.css';

const App = () => {

  const [list, setList] = useState([{ text: "Learn about React" },
  { text: "Meet friend for lunch" },
  { text: "Build really cool todo app" }]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Kevin Keesee's Todo List</h3>
      </header>
      <Input addItem={
        (t) => {
          if (t !== ''){
            list.push(t);
          }
        }
      } />
      <ItemList list={list} />
    </div>
  );
}

export default App;