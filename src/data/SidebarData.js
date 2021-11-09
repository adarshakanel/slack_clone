import React from 'react'
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { BsInboxes } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export const SidebarData = [
    {
        icons: <FaRegCommentAlt />,
        text: "Thread"
    },
    {
        icons: <BsInboxes />,
        text: "All DMs"
    },
    {
        icons: <BsEnvelopeOpenFill />,
        text: "Mentions & Reactions"
    },
    {
        icons: <FaRegBookmark />,
        text: "Save Items"
    },
    {
        icons: <BsPeopleFill />,
        text: "Peoples & Group"
    },
    {
        icons: <BsFillGrid3X3GapFill />,
        text: "More"
    }
]