import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Components/Header';
import Home from './Home';

const Routes = (props) => {
    return (
      <div className='min-h-screen bg-white dark:bg-gray-800'>
        <div className="max-w-screen-lg m-auto">
          <Header />
          <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
          </Switch>
        </div>
      </div>
    );
}



export default Routes;
