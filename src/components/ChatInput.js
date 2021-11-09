import React, { useState } from 'react'
import classes from "./ChatInput.module.css"
import { IoMdSend } from "react-icons/io";
import { BsLightning, BsCodeSlash, BsTypeStrikethrough, BsLink45Deg, BsTypeBold, BsTypeItalic } from "react-icons/bs";
import { AiOutlineOrderedList, AiOutlineUnorderedList } from "react-icons/ai";
import { MdFormatSize } from "react-icons/md";
import { GoMention } from "react-icons/go";
import { GrAttachment, GrEmoji } from "react-icons/gr";

export const ChatInput = (props) => {
    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if (!input) return;
        props.sendMessage(input);
        setInput("");

    }

    return (
        <div className={classes.ChatMessageContainer}>
            <form>

                <div className={classes.ChatMessageInputContainer}>
                    <div className={classes.ChatMessageInputForm}>
                        <input className={classes.ChatMessageInput}
                            type="text" placeholder="Message here..."
                            onChange={(e) => setInput(e.target.value)}
                            value={input} />
                    </div>
                </div>
                <div className={classes.ChatMessageStylingContainer}>
                    <div className={classes.ChatMessageStylingLeftIcons}>
                        <div className={classes.ChatIcon}> <BsLightning /> </div>
                        <div className={classes.ChatIcon}> <BsTypeBold /> </div>
                        <div className={classes.ChatIcon}> <BsTypeItalic /> </div>
                        <div className={classes.ChatIcon}> <BsTypeStrikethrough /></div>
                        <div className={classes.ChatIcon}> <BsCodeSlash /></div>
                        <div className={classes.ChatIcon}> <BsLink45Deg /></div>
                        <div className={classes.ChatIcon}> <AiOutlineOrderedList /></div>
                        <div className={classes.ChatIcon}> <AiOutlineUnorderedList /></div>
                    </div>
                    <div className={classes.ChatMessageStylingRightIcons}>
                        <div className={classes.ChatIcon}> <MdFormatSize /> </div>
                        <div className={classes.ChatIcon}> <GoMention /> </div>
                        <div className={classes.ChatIcon}> <GrEmoji /> </div>
                        <div className={classes.ChatIcon}> <GrAttachment /> </div>

                        <button className={classes.ChatMessageSubmitButton}
                            type="submit"
                            onClick={send}>
                            <IoMdSend className={classes.ChatMessageButton} />
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
