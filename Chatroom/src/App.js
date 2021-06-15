import logo from './logo.svg';
import './App.css';
import {Container, Row, Col } from 'reactstrap';
import UserList from './components/UserList';
import DisplayConversation from './components/DisplayConversation';
import ChatBox from './components/ChatBox';
import { useEffect, useRef, useState } from 'react';
import Socket from './utils/socket';

function App() {

  const [message, setMessage] = useState('')
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const [conversation, setConversation] = useState([])

  const messageRef = useRef(null)

  // console.log(messageRef.current)

  const scrollBottom = () => {
    //messageRef.current > div element
    messageRef.current.scrollIntoView()
  }

  useEffect(() => {
    scrollBottom()
  },[conversation])

  // console.log(Socket)

  useEffect(()=>{
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', currentUser => {
      // console.log(currentUser)
      setUser(currentUser)
    })

    Socket.on('UPDATE_USER_LIST', users => {
      // console.log(users)
      setUserList(users)
    })

    Socket.on('RECEIVE_BROADCAST', data => {
      // console.log(data)
      // let newConversation = [...conversation]
      // newConversation.push(data)
      setConversation((prevState) =>{
        return [...prevState, data]
      })
    })


  },[])

  const sendMessage = (e) =>{
    e.preventDefault()
    // console.log(message)

    let newMessage = {
      username: user.username,
      message: message,
      timestamp: Date.now()
    }

    Socket.emit('BROADCAST_MESSAGE', newMessage)
    setMessage("")

  }

  return (
    <Container>
      <Row>
        <Col xs="3">
          <UserList userList={userList} user={user}/>
        </Col>
        <Col >
          <div style={{height:"80vh", border: "1px solid black", overflowY:"scroll"}}>
            <DisplayConversation conversation={conversation}/>
            <div ref={messageRef}></div>
          </div>
          
          <ChatBox message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
