import React from 'react';
import { NavLink } from 'react-router-dom'
import { Responsive, Menu, Icon } from 'semantic-ui-react'

export default () =>
  <Menu vertical pointing icon>
    <Menu.Item header as={NavLink} exact to="/"><Icon name='home' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Home</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Attendance"><Icon name='calendar check outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Attendance</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Message"><Icon name='envelope outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Message</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Schedule"><Icon name='calendar alternate outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Schedule</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Student"><Icon name='id badge outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Student</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Teacher"><Icon name='id card outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Teacher</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Parents"><Icon name='user outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Parents</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Facility"><Icon name='building outline' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Facility</Responsive>
    </Menu.Item>
    <Menu.Item header as={NavLink} to="/resource/Level"><Icon name='block layout' />
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>Level</Responsive>
    </Menu.Item>
  </Menu>