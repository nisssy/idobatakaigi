import React from 'react';
import {pushMessage} from '../firebase';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButton = ({name ,setText, text}) => {
    return (
        <IconButton 
        //aria-label="send" 
        disabled={text===''}
        onClick={() => {
            pushMessage({name: 'a',text});
            setText('');
        }}
        value={text}
        >
            <SendIcon />
        </IconButton>
    )
}

export default MessageSubmitButton;