import React from 'react'
import classes from "./Header.module.css"
import { FaRegClock } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
function Header({ user, signOut }) {
    return (
        <main className={classes.header}>
            <div className={classes.search}>
                <FaRegClock className={classes.clock} />

                <div className={classes.searchContainer}>
                    <div className={classes.search_field}>
                        <input type="text" placeholder="Search..." alt="..." className={classes.search_box}></input>
                    </div>
                </div>

                <FaRegQuestionCircle className={classes.question} />
            </div>

            <div className={classes.usercontainer}>

                <div className={classes.name}>
                    {user.name ? user.name : "Unknown User"}
                </div>

                <div className={classes.userimage} onClick={signOut}>
                    <img src={user.photo ?
                        user.photo : "https://i.imgur.com/6VBx3io.png"}
                        alt="..." className="image" />
                </div>

            </div>
        </main>
    )
}

export default Header;