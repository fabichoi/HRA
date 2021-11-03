import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Home, Search, Learn, Words, Auth } from './pages';
import Menu from './components/Menu';
import HeaderContainer from './containers/Header/HeaderContainer';

import storage from 'lib/storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'redux/modules/user';

class App extends Component {

  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo');
    if (!loggedInfo) return;

    const { UserActions } = this.props;
    UserActions.setLoggedInfo(loggedInfo);
    try {
      await UserActions.checkStatus();
    } catch (e) {
      storage.remove('loggedInfo');
      window.location.href = '/auth/login?expired';
    }
  };

  componentDidMount() {
    this.initializeUserInfo();
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        <Route path="/auth" component={Auth} />        
        <Route exact path="/" component={Home} />     
        <Route path="/search" component={Search} />
        <Route path="/learn" component={Learn} />
        <Route path="/words" component={Words} />  
      </div>
    );
  };
}

export default connect(
  null,
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(App);
