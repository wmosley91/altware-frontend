import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';

import Home from 'containers/Home';
import NotFound from 'containers/NotFound';
import Category from 'containers/Category';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/category/:id' component={Category}/>

      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
