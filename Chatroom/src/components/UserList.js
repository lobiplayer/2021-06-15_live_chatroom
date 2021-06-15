import React from 'react';

const UserList = ({userList, user}) => {
    
    return (
        <>
            <h2>User List</h2>
            {
                userList.map(u => {
                    return (
                        <li style = {{
                            backgroundColor: u.username === user.username ? "aqua" : "white"
                        }}>
                            {u.username}
                        </li>
                    )
                })
            }
        </>
        
    )
}

export default UserList;