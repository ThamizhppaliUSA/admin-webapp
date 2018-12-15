import React, { Component } from 'react';
import { Responsive, Image, Menu, Icon } from 'semantic-ui-react'
import { Auth } from 'aws-amplify';

const noMarginStyle = {
  padding: '0px',
  margin: '0 .415em'
  
  // Style to apply in below header image for divider, if needed
  //, borderRight:'1px solid rgba(34,36,38,.15)', borderRadius: '.28571429rem'
}

export default class Header extends Component {
  handleLogout = async event => {
    await Auth.signOut();
    window.location.href="/";
  }

  render() {
    return (
      this.props.canAccess ? (
        <Menu color='orange' secondary attached="top">
          <Menu.Item header style={noMarginStyle}>
            <Image
              size='tiny'
              src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`}
              style={{ marginRight: '1.5em' }}
            /> 
            <span>{this.props.userPalli + ' Thamizhppali USA'}</span>
          </Menu.Item>

          <Menu.Menu position="right">
            <Responsive as={Menu.Item} minWidth={600} header icon="user" content={this.props.loggedInUser} />
            <Menu.Item header onClick={this.handleLogout}><Icon name='log out' />
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>Logout</Responsive>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      ) : (
        <Menu color='orange' secondary>
          <Menu.Item header>
            <Image
              size='mini'
              src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`}
              style={{ marginRight: '1.5em' }}
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item header icon="user" content={this.props.loggedInUser} />
            <Menu.Item header onClick={this.handleLogout} icon="log out" content="Logout" />
          </Menu.Menu>
        </Menu>
      )
    );
  }
}
