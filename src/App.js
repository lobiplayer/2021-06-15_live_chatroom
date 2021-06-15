import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { useEffect, useState, useRef } from 'react'
import ChatForm from './components/ChatForm';
import ChatDisplay from './components/ChatDisplay';
import OnlineUsers from './components/OnlineUsers';
import Socket from './utils/Socket'

function App() {

  const [message, setMessage] = useState('')
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const [conversation, setConversation] = useState([])

  const messageRef = useRef(null)

  const scrollBottom = () => {
    //messageRef.current > div element
    messageRef.current.scrollIntoView()
  }

  useEffect(() => {
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', currentUser => {
      setUser(currentUser)
    })

    Socket.on('UPDATE_USER_LIST', users => {
      setUserList(users)
    })

    Socket.on('RECEIVE_BROADCAST', data => {
      setConversation((prevState) =>{
        return [...prevState, data]
      })
    })
  }, [])

  const sendMessage = () => {
    let newMessage = {
      username: user.username,
      message: message,
      timestamp: Date.now()
    }

    Socket.emit('BROADCAST_MESSAGE', newMessage)
    setMessage("")
  }
  

  return (
    <div className="App">
    <Container>
        <Row>
          <Col xs='3'>
            <OnlineUsers userList={userList} user={user} />
          </Col>
          <Col>
            <div style={{ height: "80vh", border: "1px solid black", overflowY: "scroll" }}>
              <ChatDisplay conversation={conversation} />
              <div ref={messageRef}></div>
            </div>
          </Col>
        </Row>
    </Container>
    <Row></Row>
      <ChatForm message={message} setMessage={setMessage} sendMessage={sendMessage} />

    </div>
  );
}

export default App;
