import React,{useState} from 'react';
import { TextField } from '@material-ui/core';


const MessageField = ({name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);
    
    console.log(text);
    return <TextField 
    fullWidth={true}
    onChange={(e)=>{setText(e.target.value)}}
    onKeyDown={(e)=>{
        const text = e.target.value;
        if(!text)return;
        if (isComposed)return;
        if(e.key === 'Enter' ){
            console.log('push');
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