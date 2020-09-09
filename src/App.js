import React, { useContext } from 'react';
import './App.css';
import { Typography, Avatar } from '@material-ui/core'
import AddTodo from './components/AddTodo'
import Tasks from './components/Tasks'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import { Context as TodoContext } from './redux/TodoContext'


function App() {

  const {state} = useContext(TodoContext);

  return (
    <Router>
      <Switch>
        {state.user? 
        <Route path="/">
          <div className="app">
            <div className="header">
              <Typography variant="h2">Hello, {state.user.displayName}</Typography>
              <Avatar src={state.user.photoURL} style={{marginLeft: 20}}/>
            </div>
            <AddTodo/>
            <Tasks/>
          </div>
        </Route>:
        <Route path="/">
          <Auth/>
        </Route>
        }
      </Switch>
    </Router>
  );
}

export default App;
