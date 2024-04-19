import React, { useEffect } from "react";
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import InputOption from "./InputOption";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { db } from './firebase'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";



function Feed(){ 


    //!We are here

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                    
                }
            )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add(
            {
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl: (!user.photoUrl ? "" : user.photoUrl),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        setInput('');
    }

    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-option">
                    <InputOption color="#70B5F9" Icon={ImageIcon} title='Photo'/>
                    <InputOption color="#E7A33E" Icon={SubscriptionsIcon} title='Video'/>
                    <InputOption color="#C0CBCD" Icon={EventNoteIcon} title='Event'/>
                    <InputOption color="#7FC15E" Icon={CalendarViewDayIcon} title='Write Article'/>
                </div>
            </div>
            

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
                    <Post key={id} message={message} description={description} name={name} photoUrl={photoUrl}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;