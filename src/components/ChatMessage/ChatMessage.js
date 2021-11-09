import React from 'react'
import classes from './ChatMessage.module.css'
// import coaster from "./coaster.jpg"
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";


function ChatMessage({ id, text, name, image, timestamp, deleteMessage, currentUser }) {
    const chatId = (id) => {
        console.log(id)
    }

    return (
        <div className={classes.ChannelMessageContainer} onClick={() => chatId(id)}
        >

            <div className={classes.UserAvatarContainer}>
                <img src={image} alt="" />
            </div>
            <div className={classes.MessageInfo}>
                <div className={classes.CommentHeader}>
                    <div className={classes.UserInfo}>
                        <div className={classes.Username}>
                            {name}
                        </div>
                        <div className={classes.MessageDate}>
                            {new Date(timestamp.toDate()).toUTCString()}
                        </div>
                    </div>
                    {

                        currentUser == name ?
                            <div className={classes.CommentOptions}>

                                <AiFillEdit className={classes.EditComment} />
                                <AiOutlineDelete className={classes.DeleteComment} onClick={() => deleteMessage(id)} />
                            </div> : null


                    }

                </div>
                <div classes={classes.ChatMessage}>
                    {text}
                </div>


            </div>
        </div>
    )
}

export default ChatMessage;