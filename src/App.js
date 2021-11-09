import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import classes from "./App.module.css"
import Sidebar from './components/Sidebar';
import db from "./Firebase";
import { useEffect, useState } from 'react';
import { auth, provider } from './Firebase';

// npm i styled-components
// npm i react-router-dom
// npm i firebase@^8.10.0
// npm install -g firebase-tools
function App() {
  const [rooms, setRooms] = useState([]);
  // need to convert string value back to object
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const signOut = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        setUser(null);
      })
  }

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, channelName: doc.data().channelName };
      }))
    });
  }

  // runs the function only once, instead of refreshing the page multiple times
  useEffect(() => {
    getChannels();
  }, []);

  // console.log(rooms)
  // console.log("User in App state", user)
  return (
    <div className="App">
      <Router>
        {
          !user ?
            <Login setUser={setUser} />
            :
            // {/* the overall container */}
            <div className={classes.container}>
              <Header user={user} signOut={signOut} />
              <main className={classes.main}>
                <Sidebar className={classes.sidebar} rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId" >
                    <Chat user={user} />
                  </Route>
                  <Route path="/">
                    Select or Create Channel
                  </Route>
                </Switch>
              </main>
            </div>
        }
      </Router >
    </div >
  );
}

export default App;

