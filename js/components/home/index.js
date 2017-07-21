
import React, { Component } from 'react';
import { TouchableOpacity,LayoutAnimation,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem,Thumbnail,Footer,Fab,View,Tabs,Tab,Form, Item,Card,CardItem} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import AppHeader from '../appHeader';
import { Alert,TouchableHighlight } from 'react-native';
import { Image, AsyncStorage } from 'react-native';
import ActionButton from 'react-native-action-button';
import realm from '../leads/realm';
import Calendar from 'react-native-calendar';
import { BlurView } from 'react-native-blur';
import PieChart from 'react-native-pie-chart';
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

  state = {
  isActionButtonVisible: true
}


// 2. Define a variable that will keep track of the current scroll position
_listViewOffset = 0



// 3. Add some logic in the scroll listener for hiding the action button when scrolling down
_onScroll = (event) => {
  //Alert.alert('test');
  // Simple fade-in / fade-out animation
  const CustomLayoutLinear = {
    duration: 100,
    create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
  }
  // Check if the user is scrolling up or down by confronting the new scroll position with your own one
  const currentOffset = event.nativeEvent.contentOffset.y
  const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
    ? 'down'
    : 'up'
  // If the user is scrolling down (and the action-button is still visible) hide it
  const isActionButtonVisible = direction === 'up'
  if (isActionButtonVisible !== this.state.isActionButtonVisible) {
    LayoutAnimation.configureNext(CustomLayoutLinear)
    this.setState({ isActionButtonVisible })
  }
  // Update your scroll position
  this._listViewOffset = currentOffset
}
  render() {

      var data = realm.objects('calls');
      console.log(data);
      var listItem = data.map((result) => 
                    <Card>  

                     <CardItem>
                   <Body>
                    <Text>{result.topic}</Text>
                      <Text>
                     {result.status}
                     </Text>                
              </Body>
            </CardItem>
         </Card>
    );
          
    return (
      <Container style={styles.container}>

        <Header style={styles.headerbackground}>
                    <Left>
                        <Button transparent onPress={this.props.openDrawer}>
                          <Icon style={styles.iconcss} active name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.titlecss}>SimpleCRM</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
     

        <Content>
           <Header hasTabs style={styles.header1}/>
              <Tabs initialPage={0}>
                <Tab heading="Calendar">
                <Tabs initialPage={0}>
                    <Tab heading="Daily">
                   <View>
                   
                   {listItem}
                   
  
  {this.state.isActionButtonVisible ?  <ActionButton buttonColor="#01579B" backdrop={<BlurView
          
          blurType="dark"
          blurAmount={100}
        />}>
          <ActionButton.Item buttonColor='#EC5192' style={styles.actionbutton} title="Create Call" onPress={() => Actions.callsedit()}>
          <Image source={call} style={styles.callsstye} ></Image>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ff0000' title="Create Meeting" onPress={() => Actions.meetingsedit()}>
            <Image source={meeting} style={styles.meetings} ></Image>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#4AA091' title="Create Task" onPress={() => Actions.tasksedit()}>
             <Image source={task} style={styles.tasks} ></Image>
          </ActionButton.Item>
        </ActionButton> : null}
</View> 
                    </Tab>
                    <Tab heading="Monthly">
                    <Calendar
  currentMonth={'2015-08-01'}       // Optional date to set the currently displayed month after initialization
  customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
  dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
  events={[{date:'2015-07-01'}]}// Optional array of event objects with a date property and custom styles for the event indicator
  monthNames={Array}                // Defaults to english names of months
  nextButtonText={'Next'}           // Text for next button. Default: 'Next'
  onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
  onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
  onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
  onTouchNext={this.onTouchNext}    // Callback for next touch event
  onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
  onTitlePress={this.onTitlePress}  // Callback on title press
  prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
  removeClippedSubviews={false}     // Set to false for us within Modals. Default: true
  //renderDay={<CustomDay />}         // Optionally render a custom day component
  scrollEnabled={true}              // False disables swiping. Default: False
  selectedDate={'2015-08-15'}       // Day to be selected
  showControls={true}               // False hides prev/next buttons. Default: False
  showEventIndicators={true}        // False hides event indicators. Default:False
  startDate={'2015-08-01'}          // The first month that will display. Default: current month
  titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
  today={'2017-05-16'}              // Defaults to today
  weekStart={1} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
/>
                    </Tab>
                    </Tabs>
                </Tab>
                <Tab heading="Recent">
                  </Tab> 
                <Tab heading="Dashboard">
                 
                </Tab>
              </Tabs>       

        </Content>

    
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
