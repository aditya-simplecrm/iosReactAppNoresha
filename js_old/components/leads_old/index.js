
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert,TouchableHighlight } from 'react-native';
import { Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, List, ListItem,Thumbnail, Fab,View} from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import ActionButton from 'react-native-action-button';

const call = require('../../../images/call.png');
const meeting = require('../../../images/meeting.png');
const task = require('../../../images/task.png');

class Leads extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }
   constructor(props) {
    super(props);
    this.state = {
    active: false
     };
  }
 
  render() {
    const { props: { name, index, list } } = this;

    const goToView2 = () => {
      Actions.view2();
      console.log('Navigation router run...');
    };

    return (
      <Container style={styles.container}>
         <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{(name) ? this.props.name : 'Leads'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>
      
        <Content>
        
           <List>
           <ListItem button onPress={() => Actions.view2()}>
                <Body>
                <Text>Kumar Pratik</Text>
                <Text>Kumar@test.com</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        
       </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(Leads);
