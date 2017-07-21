
import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, ListItem, Icon, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';

import styles from './style';
const background = require('../../../images/placeholder.png');
const home = require('../../../images/simplehome.png');
const leads = require('../../../images/simpleleads.png');
const logout = require('../../../images/simplelogout.png');
const location = require('../../../images/simplelocation.png');
class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }
_userLogout = () => {
      AsyncStorage.removeItem('username');
      Actions.login();
  }
  render() {
    return (
      <Content style={styles.sidebar} >
      <Image source={background} style={styles.logo1}></Image>
      <Text style={{marginLeft: 80,marginTop:20}}>SimpleCRM</Text>
      <ListItem button onPress={() => { Actions.home(); this.props.closeDrawer(); }} >
      <Image source={home} style={styles.home}></Image>
          <Text style={{marginLeft: 8,fontSize:15}}>Home</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.leads(); this.props.closeDrawer(); }} >
        <Image source={leads} style={styles.leads}></Image>
          <Text style={{marginLeft: 8,fontSize:15}}>Leads</Text>
        </ListItem>
         <ListItem button onPress={() => {Actions.location(); this.props.closeDrawer(); }} >
         <Image source={location} style={styles.location}></Image>
          <Text style={{marginLeft: 8,fontSize:15}}>Location</Text>
        </ListItem>
        <ListItem button onPress={() => {this._userLogout(); this.props.closeDrawer(); }} >
         <Image source={logout} style={styles.logout}></Image>
          <Text style={{marginLeft: 8,fontSize:15}}>Sign Out</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
