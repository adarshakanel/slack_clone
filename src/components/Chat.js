import React, { useEffect, useState } from 'react'
import classes from './Chat.module.css'
import { BsInfoCircle } from "react-icons/bs";
import { ChatInput } from "./ChatInput"
import ChatMessage from './ChatMessage/ChatMessage'
import db from "../Firebase"
import { useParams } from 'react-router';
import firebase from 'firebase'

function Chat(props) {
    // we can extract as channelId cause we named it that in App.js
    let { channelId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState();

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            // get snapshot of current channel
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
            })
    }

    const sendMessage = (text) => {
        if (channelId) {
            let payload = {
                text: text,
                user: props.user.name,
                userImage: props.user.photo,
                timestamp: firebase.firestore.Timestamp.now()

            }
            db.collection('rooms')
                .doc(channelId)
                .collection('messages')
                .add(payload);
        }
    }

    const getMessages = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                let message = snapshot.docs.map((doc) => {
                    const id = doc.id;
                    const data = doc.data();
                    return { id: id, ...data }
                })

                setMessages(message)
                console.log(message)
            })
    }

    const deleteMessage = (id) => {
        // console.log(`id is: ${id}`)

        const comment = db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .doc(id);

        // console.log(name)
        comment
            .get()
            .then(
                (snapshot => {
                    if (snapshot.data().user == props.user.name) {
                        comment.delete(id)
                    }
                })
            )

    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <div className={classes.ChatContainer}>
            {/* Chat */}
            <div className={classes.ChatHeader}>
                <div>
                    <div className={classes.ChatHeaderName}>
                        #{channel && channel.channelName}
                    </div>
                    <div className={classes.ChatHeaderDescription}>
                        This is the {channel && channel.channelName} decription
                    </div>
                </div>
                <div className={classes.ChannelDetails}>
                    <div className={classes.DetailsName}>
                        Details
                    </div>
                    <BsInfoCircle />

                </div>
            </div>

            <div className={classes.MessageContainer}>
                {
                    messages &&
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                            id={data.id}
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                            key={data.id}
                            currentUser={props.user.name}
                            deleteMessage={deleteMessage} />
                    ))
                }
            </div>
            <ChatInput sendMessage={sendMessage} />
        </div>
    )
}

export default Chat
