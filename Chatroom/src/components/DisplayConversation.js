import React from 'react';

const DisplayConversation = ({conversation}) => {

    return (
        <>
            {
                conversation.map((message, idx) => {
                    return(
                        <div>
                            {message.username}
                            <p>
                                {message.message}
                            </p>
                            {/* {message.timestamp} */}
                        </div>
                    )
                })
            }
        </>

    )
}

export default DisplayConversation;