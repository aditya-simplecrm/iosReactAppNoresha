
import React, { Component } from 'react';
import { TouchableOpacity, Alert, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input, Thumbnail, Tab, Tabs,Footer,ScrollView } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import AppHeader from '../appHeader';
import ActionButton from 'react-native-action-button';
import Panel from 'react-native-panel';
import realm from './realm';
const placeholder = require('../../../images/placeholder.png');
const call = require('../../../images/call.png');
const meeting = require('../../../images/meeting.png');
const task = require('../../../images/task.png');
class LeadsDetailView extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  };
  
  constructor(props) {
    super(props);
    this.state = {
        title: 'Create Lead',
        right: 'createLead',
        first_name: '',
        last_name: '',
        messsage: '',
        first_name_error: false,
        last_name_error: false,
    }

  }


  render() {
    // const realm = new Realm({schema: [Leads]});
    var data = realm.objects('leads').filtered('id = $0',this.props.id);
    return (
      <Container style={styles.container}>
        <Header>
            <Left>
                <Button transparent onPress={() => Actions.leads()}>
                  <Icon active name="ios-arrow-back" />
                </Button>  
            </Left>
            <Body style={styles.body}>
                <Title>Lead</Title>
            </Body>
            <Right>
                <Button transparent onPress={this.props.openDrawer}>
                  <Icon active name="menu" />
                </Button>                        
            </Right>
        </Header>

        <Content padder>
            
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{width: 100}}><Thumbnail large source={placeholder} /></View>
                      <View style={{width: 200}}><Text>{data[0].first_name} {data[0].last_name}</Text><Text>{data[0].title}</Text></View>
                      <View style={{width: 100}}><Button onPress={()=>Actions.leadsEditView({id:this.props.id})}><Text>Edit</Text></Button></View>
                                          
              </View> 

              
              <Header hasTabs style={styles.header1}/>
              <Tabs initialPage={0}>
                <Tab heading="Basic Info">   
                  
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Mobile Phone</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].contact_number}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Office Phone</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].office_contact_number}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Email</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].email}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Status</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].status}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Details</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].details}</Text>
                  <Item></Item>
                <Panel header='More Information'>
                <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Company Name</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].company_name}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Lead Source</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].enquiry_source}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Lead Category</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].category}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Lead Type</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].customer_type}</Text>
                  <Item></Item>
                  </Panel>
                  <Panel  header="Address">
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Street</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].street}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>City</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].city}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>State</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].state}</Text>
                  <Item></Item>
                   <Label style={{fontSize:15,color:'grey',padding:10,backgroundColor:'#fafafa'}}>Country</Label>            
                   <Text style={{fontSize:12.5,color:'green',paddingTop:0,paddingLeft:10,paddingBottom:10,backgroundColor:'#fafafa'}}>{data[0].country}</Text>
                  <Item></Item>
                  
        </Panel>
                                
                </Tab>
                <Tab heading="Appointments">
                  
                </Tab>
              </Tabs>   
        </Content>
        <Footer>
        <View style={{flex:1}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="#01579B">
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
      </Footer>
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
  list: state.list.list,
  // title: this.state.title
});

export default connect(mapStateToProps, bindAction)(LeadsDetailView);
