import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { SportsStoreDataStore } from './data/DataStore';
import { ShopConnector } from './shop/ShopConnector';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


export default class App extends Component {
  render() {
    return <Provider store={ SportsStoreDataStore }>
      <Router>
        <Switch>
          <Route path="/shop" component={ ShopConnector } />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  }
}
