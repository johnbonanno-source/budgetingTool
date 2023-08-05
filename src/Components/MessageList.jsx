import Title from "./MessageContent";
import NewMessage from "./NewMessage";
import classes from './MessageList.module.css';
import { useState } from 'react';
import Modal from './Modal'
import App from "../App";
import ProfileInfo from "./ProfileInfo"

function MessageList( {isPosting, onStopPosting}) {
    const [changeMessage, setChangeMessage] = useState('')
    const [changeName, setChangeName] = useState('')
    function changeMessageHandler(event){
        setChangeMessage(event.target.value);
    }
    function changeNameHandler(event){
        setChangeName(event.target.value);
    }

    return  (
    <>
    {/* posting Modal */}
    {isPosting ? (
    <Modal onClose={onStopPosting} >
        <NewMessage 
            onMessageChange={changeMessageHandler} 
            onNameChange={changeNameHandler}
        />    
    </Modal>
    ) : false}  
    {/* Profile Modal */}
    {isPosting ? (
        <Modal onClose={onCloseProfile} >
            <ProfileInfo></ProfileInfo> 
        </Modal>
        ) : false}
    <ul className={classes.MessageList}>
        <Title name={changeName} message={changeMessage}/>
        <Title image="RyanProfile.jpg" name="John Bonanno" message="Big D with Big fire fighting chicks"/>
    </ul>
    </>
    );
}

export default MessageList;