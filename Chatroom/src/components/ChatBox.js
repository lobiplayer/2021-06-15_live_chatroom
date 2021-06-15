import React from 'react';
import {Form, Input } from 'reactstrap';

const ChatBox = ({message, setMessage, sendMessage}) => {

    const handleInput = (e) => {
        setMessage(e.target.value)
    }

    return (
        <Form onSubmit={sendMessage}>
            <Input type="text" value={message} onChange={handleInput}/>
            <Input type="submit" value="Send"/>

        </Form>
    )
}

export default ChatBox;