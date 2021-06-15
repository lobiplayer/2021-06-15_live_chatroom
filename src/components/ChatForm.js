import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import OnEvent from 'react-onevent';

function ChatForm({ message, setMessage, sendMessage }) {

    const sumbitMessage = () => {
        console.log(message)
        setMessage('')
    }

    return (
        <div className="ChatForm">
            <Form>
                <OnEvent enter={(event) => { sendMessage() }}>
                    <Input

                        type="textarea"
                        name="message"
                        id="exampleEmail"
                        placeholder="Type your message here"
                        value={message}
                        maxLength='50'
                        required

                        onChange={(e) => { setMessage(e.target.value) }}

                    />
                </OnEvent>
                <Button color='success' onClick={(event) => sendMessage()}>Submit</Button>
            </Form>
        </div>
    );
}

export default ChatForm;
