import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './component/feed'
import Login from './component/login'
import Home from './component/home'
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './component/signup';
import './App.css';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  console.log(user)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else { dispatch(logout()) };
    })
  }, [2])

  return (
    <div className="App">
      {!user ?
        ( 
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/login' component={Login} />
            <Route  path='/signup' component={SignUp} />
          </Switch>
        </Router>
        )
        :
        (
        < >
        <Feed user={user} />
        </>
        )
        }

    </div>
  );
}
export default App;