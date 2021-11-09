import React from 'react'
import classes from "./Login.module.css"
import { auth, provider } from '../Firebase';

function Login(props) {
    const slackImage = "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg";

    const singIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL
                }
                props.setUser(newUser);
                // can only store JSon objects that are strings
                localStorage.setItem('user', JSON.stringify(newUser));
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className={classes.LoginContainer}>
            <div className={classes.LoginContent}>
                <img src={slackImage} alt="Slack logo" className={classes.SlackLogo} />
                <h1>Sign in Slack Clone</h1>
                <button className={classes.SignInButton} onClick={() => singIn()}>
                    Sign In
                </button>
                {/* <button className={classes.SignInButton}>
                    Sign Up
                </button> */}
            </div>
        </div>
    )
}

export default Login
