import React from 'react';
import  {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Boards from 'pages/Boards';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/boards"
        component={Boards}
      />
      <Redirect to="/boards" />
    </Switch>
  </BrowserRouter>
);

export default Router;
