import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import PostDetails from './components/PostDetails/PostDetails.js';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth.js';

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ () => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home}/>
            <Route path="/posts/search" exact component={Home}/>
            <Route path="/posts/:id" component={PostDetails}/>
            <Route path="/auth" exact component={() => ( !user ? <Auth/> : <Redirect to="/posts"/>)} />
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
