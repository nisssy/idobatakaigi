import React from 'react';
import {pushMessage} from '../firebase';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButton = ({name ,setText, text, inputEl}) => {
    return (
        <IconButton 
        aria-label="send" 
        disabled={text===''}
        onClick={() => {
            pushMessage({name: 'a',text});
            setText('');
            inputEl.current.focus();
        }}
        value={text}
        >
            <SendIcon />
        </IconButton>
    )
}

export default MessageSubmitButton;