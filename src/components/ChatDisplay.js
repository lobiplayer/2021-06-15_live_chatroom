import { useState } from 'react';
import moment from 'moment';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function ChatDisplay({ conversation}) {

    return (
        <div className="ChatDisplay">
            {conversation.map(conversation => (
                <div key={conversation.message} className='messageContainer'>
                <Card>
                        <CardTitle>{conversation.username}</CardTitle>
                        <CardText>{conversation.message}</CardText>
                        <CardSubtitle>{moment(conversation.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</CardSubtitle>
                </Card>
                </div>

            ))}
        </div>
    );
}

export default ChatDisplay;
