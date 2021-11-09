import React from 'react'
import classes from "./Sidebar.module.css"
import { FaPlusCircle } from 'react-icons/fa';
import { SidebarData } from '../data/SidebarData';
import { BsPlus } from "react-icons/bs";
import ChannelData from '../data/ChannelData';
import db from '../Firebase';
// useHistory routes to different url
import { useHistory } from 'react-router';

function Sidebar(props) {
    const history = useHistory();

    const goToChannel = (id) => {
        if (id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const prompName = prompt("Enter channel name: ");
        if (prompName) {
            db.collection("rooms").add({
                channelName: prompName
            })
        }
    };

    return (
        <SidebarMain className={classes.sidebar}>

            <WorkspaceContainer className={classes.workspace_container}>

                <Name className={classes.name}>
                    CurrentGroup
                </Name>

                <IconCircle className={classes.icon_circle}>
                    <FaPlusCircle className={classes.new_message} />
                </IconCircle>

            </WorkspaceContainer>

            <Channels className={classes.channels}>
                {
                    SidebarData.map((item, index) => (
                        <ChannelRow className={classes.channel_row} key={index}>
                            {item.icons}
                            {item.text}
                        </ChannelRow>
                    ))
                }
            </Channels>

            <PersonalChannelList className={classes.personal_channel_list}>

                <PersonalChannelHeader className={classes.personal_channel_header}>

                    <ChannelName className={classes.channel_name}>
                        Channels
                    </ChannelName>
                    <BsPlus className={classes.add_channel_button} onClick={addChannel} />

                </PersonalChannelHeader>
                <ChannelData rooms={props.rooms} goToChannel={goToChannel} />

            </PersonalChannelList>

        </SidebarMain>
    )
}

const SidebarMain = 'div'
const WorkspaceContainer = 'div'
const Name = 'div'
const IconCircle = 'div'
const Channels = 'div'
const ChannelRow = 'div'
const PersonalChannelList = 'div'
const PersonalChannelHeader = 'div'
const ChannelName = 'div'

export default Sidebar
