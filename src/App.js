import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './components/Header/Header';
const { Navs } = require('./routes/_nav');

const App = (props) => {
     return (
          <React.Fragment>
               <Header />
               <Router>
                    <React.Suspense fallback={<div>Loading...</div>}>
                         {Navs.map((x, i) => (
                              <Route
                                   key={i}
                                   path={x.path}
                                   exact={x.exact}
                                   component={x.component}
                                   render={() => (x.path === '/' ? <Redirect to={'/moviecart'} /> : null)}
                              />
                         ))}
                    </React.Suspense>
               </Router>
          </React.Fragment>
     );
};

export default App;
