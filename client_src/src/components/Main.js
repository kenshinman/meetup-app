import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Meetups from './Meetups'
import About from './About'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Meetups} />
        <Route exact path='/about' component={About} />
      </Switch>
    </main>
  );
}

export default Main;
