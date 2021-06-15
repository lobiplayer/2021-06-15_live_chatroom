import React, { useEffect, useState }  from 'react';
import Socket from '../utils/Socket'



function OnlineUsers({userList, user}) {

    
    return (
        <div className="OnlineUsers">
            <h1>userlist</h1>
        {
            userList.map(u => {           
                return <li key={u.username}>{u.username}</li>
            })
        }
        </div>
    );
}

export default OnlineUsers;

