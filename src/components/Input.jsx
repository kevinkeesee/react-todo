import React, {useState} from 'react';
//import Item from './Item';

import TextField from '@material-ui/core/TextField';

const Input = ({addItem}) => {

    const [text, setText] = useState('');

    const onChange = val => setText(val.target.value);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addItem(text);
                setText('');
            }
            } className='form'>
                <TextField variant="outlined" margin="normal" placeholder='Enter something to do...' 
                value={text} onChange={(val) => onChange(val)} />
            </form>
        </div>
    )
}

export default Input;