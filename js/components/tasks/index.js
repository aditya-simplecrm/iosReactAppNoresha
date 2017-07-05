
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right,Tabs,Tab,Form, Item, Label, Input } from 'native-base';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import AppHeader from '../appHeader';

class Tasks extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  };

  
  render() {
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
              <Tabs initialPage={2}>
                <Tab heading="Calls">
                 <Content padder>
               
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
            <Item floatingLabel>
              <Label>Start Date & Time*</Label>
              <Input 
                  onChangeText={(title) => this.setState({title})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Select Reminders</Label>
              <Input 
                  onChangeText={(details) => this.setState({details})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Duration</Label>
              <Input 
                  onChangeText={(mobile) => this.setState({mobile})}
              />
            </Item>

            <Item floatingLabel>
              <Label>Status</Label>
              <Input 
                  onChangeText={(email) => this.setState({email})}
              />
            </Item>
            
          </Form>
                  
                  </Content>              
                </Tab>
                <Tab heading="Meetings">
                   <Content padder>
               
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
            <Item floatingLabel>
              <Label>Start Date & Time*</Label>
              <Input 
                  onChangeText={(title) => this.setState({title})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Select Reminders</Label>
              <Input 
                  onChangeText={(details) => this.setState({details})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Duration</Label>
              <Input 
                  onChangeText={(mobile) => this.setState({mobile})}
              />
            </Item>

            <Item floatingLabel>
              <Label>Status</Label>
              <Input 
                  onChangeText={(email) => this.setState({email})}
              />
            </Item>
            
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
            <Item floatingLabel>
              <Label>Due Date & Time*</Label>
              <Input 
                  onChangeText={(title) => this.setState({title})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Start Date & Time*</Label>
              <Input 
                  onChangeText={(details) => this.setState({details})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Priority*</Label>
              <Input 
                  onChangeText={(mobile) => this.setState({mobile})}
              />
            </Item>

            <Item floatingLabel>
              <Label>Status*</Label>
              <Input 
                  onChangeText={(email) => this.setState({email})}
              />
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

export default connect(mapStateToProps, bindAction)(Tasks);
