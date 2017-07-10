
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right,Tabs,Tab,Form, Item, Label, Input,TouchableOpacity } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  PanResponder
} from 'react-native';
import { Alert, ActionSheetIOS, PixelRatio, Image, ImageStore, AsyncStorage } from 'react-native';
import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import AppHeader from '../appHeader';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import realm from '../leads/realm';


var STATUS = [
  'Planned',
  'Held',
  'Not Held',
];
var DESTRUCTIVE_INDEX = -1;
var CANCEL_INDEX = 3;
var REMINDERS = [
  'No Reminder',
  '1 Minute Prior',
  '5 Minute Prior',
  '10 Minute Prior',
  '15 Minute Prior',
  '30 Minute Prior',
  '1 Hour Prior',
  '2 Hour Prior',
  '3 Hour Prior',
  '5 Hour Prior',
  '1 Day Prior', 
];
var DESTRUCTIVE_INDEX_REMINDERS = -1;
var CANCEL_INDEX_REMINDERS = 11;
var DURATION = [
  '15 Minutes',
  '30 Minutes',
  '45 Minutes',
  '60 Minutes',
  '75 Minutes',
  '90 Minutes',
 ];
   var DESTRUCTIVE_INDEX_DURATION = -1;
var CANCEL_INDEX_DURATION = 6;
var PRIORITY = [
  'Medium',
  'High',
  'Low',
];
var DESTRUCTIVE_INDEX_PRIORITY = -1;
var CANCEL_INDEX_PRIORITY = 3;
var TASKSTATUS = [
  'Not Started',
  'In Progress',
  'Completed',
  'Pending Input',
  'Deferred'
];
var DESTRUCTIVE_INDEX_TASKSTATUS = -1;
var CANCEL_INDEX_TASKSTATUS = 5;
class Calls extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
        title: 'Create Call',
        title_error: false,
        right: 'createCall',
        topic: '',
        details: '',
        startDate: new Date(),
        reminders: '5 Minute Prior',
        duration: '15 Minutes',
        status: 'Planned',
      
    }

  }

  _createcall = () => {

    //RNLocalNotifications.createNotification(1, 'Some text', '2017-07-10 16:41', 'default');
    Alert.alert('test');
   
     if (this.state.title == '') {
        this.setState({title_error: true});
      
        Alert.alert('Please enter title');
      }
    var id = realm.objects('calls').length + 1;
    var data = realm.write(() => {
               realm.create('calls', {
                                        id: id,
                                        deleted: false, 
                                        topic: this.state.topic, 
                                        details: this.state.details, 
                                        creationDate: new Date(),
                                        startDate: this.state.startDate,
                                        reminders: this.state.reminders,
                                        status: this.state.status,
                                        duration: this.state.duration                                       
                                      }
                );
            });
        
            Actions.home(); 
  
    }      

         
   
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: STATUS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: 'green',
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 3:
          
          break
        default:
          this.setState({ status: STATUS[buttonIndex]});
          break
      }
    });
  }

  showActionSheet_reminders() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: REMINDERS,
      cancelButtonIndex: CANCEL_INDEX_REMINDERS,
      destructiveButtonIndex: DESTRUCTIVE_INDEX_REMINDERS,
      tintColor: 'green',
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 11:
          
          break
        default:
          this.setState({ reminders: REMINDERS[buttonIndex]});
          break
      }
    });
  }

  showActionSheet_duration() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: DURATION,
      cancelButtonIndex: CANCEL_INDEX_DURATION,
      destructiveButtonIndex: DESTRUCTIVE_INDEX_DURATION,
      tintColor: 'green',
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 6:
          
          break
        default:
          this.setState({ duration: DURATION[buttonIndex]});
          break
      }
    });
  }
showActionSheet_priority() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: PRIORITY,
      cancelButtonIndex: CANCEL_INDEX_PRIORITY,
      destructiveButtonIndex: DESTRUCTIVE_INDEX_PRIORITY,
      tintColor: 'green',
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 3:
          
          break
        default:
          this.setState({ priority: PRIORITY[buttonIndex]});
          break
      }
    });
  }
showActionSheet_taskstatus() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: TASKSTATUS,
      cancelButtonIndex: CANCEL_INDEX_TASKSTATUS,
      destructiveButtonIndex: DESTRUCTIVE_INDEX_TASKSTATUS,
      tintColor: 'green',
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 5:
          
          break
        default:
          this.setState({ taskstatus: TASKSTATUS[buttonIndex]});
          break
      }
    });
  }

  render() {
//RNLocalNotifications.createNotification(id, text, datetime, sound); 
//RNLocalNotifications.createNotification(1);
    return (
      <Container style={styles.container}>
       <Header>
                    <Left>
                        <Button transparent onPress={this.props.openDrawer}>
                          <Icon active name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>SimpleCRM</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

      <Header hasTabs style={styles.header1}/>
              <Tabs initialPage={0}>
                <Tab heading="Calls">
                 <Content padder>
               
             <Form>
            <Item floatingLabel>
              <Label>Topic*</Label>
              <Input 
                  onChangeText={(topic) => this.setState({topic})}                  
              />              
            </Item>
            <Item floatingLabel>
              <Label>Details</Label>
              <Input 
                  onChangeText={(details) => this.setState({details})}
              />
            </Item>
            <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Start Date & Time*</Label>            
            <Item>
            <DatePicker
          style={{width: 300}}
          mode="datetime"
          date={this.state.startDate}
          format="MMM DD, YYYY h:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 3,
              marginLeft: 0,
              marginRight:-40
            },
            dateInput: {
              marginLeft: 0
            }
          }}
          minuteInterval={10}
         onDateChange={(startDate) => {this.setState({startDate});}}
        /></Item>
           
            <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Select Reminders</Label>
            <Item onPress={this.showActionSheet_reminders.bind(this)}>

                <Input disabled placeholder={this.state.reminders} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
           <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Duration</Label>
            <Item onPress={this.showActionSheet_duration.bind(this)}>

                <Input disabled placeholder={this.state.duration} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
             <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Status</Label>
            <Item onPress={this.showActionSheet.bind(this)}>

                <Input disabled placeholder={this.state.status} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
            <Button transparent  style={{backgroundColor:'#01579B',paddingLeft:120,paddingRight:120,marginLeft:35}} onPress={this._createcall}>
                <Text style={{color:'white'}}>Create</Text>
                </Button> 
                       
          </Form>
                  
                  </Content>              
                </Tab>
                <Tab heading="Meetings">
                   <Content padder>
               
               <Form>
            <Item floatingLabel>
              <Label>Topic*</Label>
              <Input 
                  onChangeText={(topic) => this.setState({topic})}                  
              />              
            </Item>
            <Item floatingLabel>
              <Label>Details</Label>
              <Input 
                  onChangeText={(details) => this.setState({details})}
              />
            </Item>
            <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Start Date & Time*</Label>            
            <Item>
           <DatePicker
          style={{width: 300}}
          mode="datetime"
          date={this.state.startDate}
          format="MMM DD, YYYY h:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 3,
              marginLeft: 0,
              marginRight:-40
            },
            dateInput: {
              marginLeft: 0
            }
          }}
          minuteInterval={10}
         onDateChange={(startDate) => {this.setState({startDate});}}
        /></Item>
           
            <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Select Reminders</Label>
            <Item onPress={this.showActionSheet_reminders.bind(this)}>

                <Input disabled placeholder={this.state.reminders} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
           <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Duration</Label>
            <Item onPress={this.showActionSheet_duration.bind(this)}>

                <Input disabled placeholder={this.state.duration} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
             <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Status</Label>
            <Item onPress={this.showActionSheet.bind(this)}>

                <Input disabled placeholder={this.state.status} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
            <Button transparent  style={{backgroundColor:'#01579B',paddingLeft:120,paddingRight:120,marginLeft:35}} onPress={this._createcall}>
                <Text style={{color:'white'}}>Create</Text>
                </Button> 
                       
          </Form>
          </Content> 
                </Tab> 
                <Tab heading="Tasks">
                  <Form>
            <Item floatingLabel>
              <Label>Topic*</Label>
              <Input 
                  onChangeText={(first_name) => this.setState({first_name})}
                  
              />
            </Item>
            <Item floatingLabel>
              <Label>Details</Label>
              <Input 
                  onChangeText={(last_name) => this.setState({last_name})}
              />
            </Item>
            <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Due Date & Time*</Label>
            
            <Item>
            <DatePicker
          style={{width: 300}}
          date={this.state.customdate}
          mode="datetime"
          format="MMM DD, YYYY h:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 3,
              marginLeft: 0,
              marginRight:-40
            },
            dateInput: {
              marginLeft: 0
            }
          }}
          minuteInterval={10}
          onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
        /></Item>
        <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Start Date & Time*</Label>
            
            <Item>
            <DatePicker
          style={{width: 300}}
          date={this.state.customdate}
          mode="datetime"
          format="MMM DD, YYYY h:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 3,
              marginLeft: 0,
              marginRight:-40
            },
            dateInput: {
              marginLeft: 0
            }
          }}
          minuteInterval={10}
          onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
        />
        </Item>
           <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Priority</Label>
            <Item onPress={this.showActionSheet_priority.bind(this)}>

                <Input disabled placeholder={this.state.priority} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
             <Label style={{fontSize:15,marginTop:20,marginLeft:18}}>Status</Label>
            <Item onPress={this.showActionSheet_taskstatus.bind(this)}>

                <Input disabled placeholder={this.state.taskstatus} style={{top:-1}} />
                <Icon name='md-arrow-dropdown-circle' style={{}}/>
            </Item>
           
            
          </Form>
                </Tab>
              </Tabs>       

       
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

export default connect(mapStateToProps, bindAction)(Calls);
