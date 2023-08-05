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
        <Modal  >
        </Modal>
        ) : false}
    <ul className={classes.MessageList}>
        <li>
        <div className="float: left;">
            <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/87539ba2-07d6-4642-9788-21a631b6f4c1.png" alt="W3Schools.com"></img>    
        </div>
        </li>
        <li>
            <div className="float: left;">

                <Title name={changeName} message={changeMessage}/> 
            </div>
        </li>
    
    </ul>
    </>
    );
}

export default MessageList;