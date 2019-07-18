import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TimetableOverview from './pages/TimetableOverview';
import NewIdeaForm from './pages/NewIdeaForm';
import Login from './pages/Login';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/timetable' component={TimetableOverview} />
          <Route path='/timetable/idea/new' component={NewIdeaForm} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
