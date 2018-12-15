import React, { Component } from 'react';
import Routes from "./Routes";
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { ConfirmSignIn, ForgotPassword, SignIn, withAuthenticator } from 'aws-amplify-react';
import { Grid, Container } from 'semantic-ui-react'
import Header from './component/Header'
import Navigation from './component/Navigation'
import AccessDenied from './containers/AccessDenied'

Amplify.configure(aws_exports);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isAuthenticated: false,
      loggedInUser: '',
      userPalli: '',
      scopes:[],
    };
  }

  setUserAttributes = idToken => {
    if( idToken && idToken.payload ) {
      let payload = idToken.payload;
      this.setState({
        loggedInUser: (payload['cognito:username'] ? payload['cognito:username'] : ''),
        userPalli: (payload['custom:palli'] ? payload['custom:palli'] : ''),
        scopes:(payload['cognito:groups'] ? payload['cognito:groups'] : []),
        isAuthenticated: true
      });

      console.log(this.state);
    }
  }

  async componentDidMount() { 
    await Auth.currentSession()
      .then(user => this.setUserAttributes(user.idToken))
      .catch(err => console.log(err));

    this.setState({ isLoading: false });
  }

  render() {
    const canAccess = this.state.isAuthenticated && 
      (this.state.scopes.includes('admin') || this.state.scopes.includes('palliadmin'))
    return (
      !this.state.isLoading && 
      <Container fluid>
        <Header canAccess={canAccess} userPalli={this.state.userPalli} loggedInUser={this.state.loggedInUser.toUpperCase()} />
        { canAccess ? 
          <Grid>
            <Grid.Column mobile={2} tablet={2} computer={2} largeScreen={2}>
              <Navigation />
            </Grid.Column>
            <Grid.Column mobile={14} tablet={14} computer={14} largeScreen={14}>
              <Routes />
            </Grid.Column>
          </Grid> : <AccessDenied />}
      </Container>
    );
  }
}

export default withAuthenticator(App, false, [
  <SignIn/>,
  <ConfirmSignIn/>,
  <ForgotPassword/>
]);