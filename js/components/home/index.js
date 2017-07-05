
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem,Thumbnail, Fab,View} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import AppHeader from '../appHeader';
import { Alert,TouchableHighlight } from 'react-native';
import { Image, AsyncStorage } from 'react-native';
import ActionButton from 'react-native-action-button';

const call = require('../../../images/call.png');
const meeting = require('../../../images/meeting.png');
const task = require('../../../images/task.png');
class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  };

  render() {
     
    return (
      <Container style={styles.container}>
       <AppHeader />

        <Content>
          
        </Content>
         <View style={{flex:1}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#EC5192' style={styles.actionbutton} title="Create Call" onPress={() => Actions.callsedit()}>
          <Image source={call} style={styles.callsstye} ></Image>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ff0000' title="Create Meeting" onPress={() => Actions.meetingsedit()}>
            <Image source={meeting} style={styles.meetings} ></Image>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#4AA091' title="Create Task" onPress={() => Actions.tasksedit()}>
             <Image source={task} style={styles.tasks} ></Image>
          </ActionButton.Item>
        </ActionButton>
      </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Home);
