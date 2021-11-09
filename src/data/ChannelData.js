import classes from "../components/Sidebar.module.css"

const ChannelData = (props) => {
    return (props.rooms.map((item) => {
        return (<div className={classes.personal_channel}
            key={item.id} onClick={() => props.goToChannel(item.id)}>
            #{item.channelName}
        </div>)
    })
    )
}

export default ChannelData;