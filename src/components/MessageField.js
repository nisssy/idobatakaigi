import React,{useState} from 'react';
import { TextField } from '@material-ui/core';
import {pushMessage} from '../firebase';

const MessageField = ({inputEl, name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);
    
    return <TextField
    autoFocus 
    inputRef={inputEl}
    fullWidth={true}
    onChange={(e)=>{setText(e.target.value)}}
    onKeyDown={(e)=>{
        const text = e.target.value;
        if(!text)return;
        if (isComposed)return;
        if(e.key === 'Enter' ){
            pushMessage({name, text})
            e.preventDefault();
            setText('');
        }
    }}
    onCompositionStart={() => {
        setIsComposed(true);
    }}
    onCompositionEnd={() => {
        setIsComposed(false);
    }}
    value={text}
    />
}


export default MessageField;