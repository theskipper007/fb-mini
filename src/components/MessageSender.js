import React, {useState} from 'react'
import './MessageSender.css';
import {Avatar} from "@material-ui/core";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import db from './firebase';
import { useStateValue } from '../StateProvider'
// import InsertEmoticonIcon from '@material-ui/icons/PhotoLibrary';
import firebase from 'firebase';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput('')
        setImageUrl('')

       
    };
    return (
        <div className = "messageSender">
            <div className = "messageSender__top">
                <Avatar
                 src = {user.photoURL}
                />
                <form>
                    <input 
                        value = {input}
                        onChange = {(e) => setInput(e.target.value)}
                        className = "messageSender__input"
                        placeholder = {`What's on your mind, ${user.displayName} ?`}
                    />
                    <input 
                        value = {imageUrl}
                        onChange = {(e) => setImageUrl(e.target.value)}
                        placeholder = "Image URL"
                    />
                    <button
                    onClick = {handleSubmit} 
                    type = "submit">Hidden submit</button>
                </form>
            </div>
            <div className = "messageSender__bottom">
                <div className = "messageSender__options">
                    <PhotoLibraryIcon style = {{ color: "green"}} />
                    <h3>Photo/Video</h3>
                 </div>
                 {/* <div className = "messageSender__options">
                    <InsertEmoticonIcon style = {{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                 </div>   */}
            </div>

        </div>
    )
}

export default MessageSender
