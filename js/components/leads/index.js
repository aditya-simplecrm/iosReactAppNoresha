
import React, { Component } from 'react';
import { TouchableOpacity, Alert, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input, List, ListItem, Card, CardItem, Fab, View } from 'native-base';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import AppHeader from '../appHeader';

import realm from './realm';

class Leads extends Component {

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
        active: false
    }

  }

  render() {
    var data = realm.objects('leads');
    var listItem = data.map((result) => 

          <Card >  

            <CardItem onPress={() => Actions.leadsDetailView({id : result.id})}>
              <Body>
                <Text>{result.first_name} {result.last_name}</Text>
                <Text>
                  {result.email}
                </Text>
                <Text>
                  {result.contact_number}
                </Text>                
              </Body>
            </CardItem>
         </Card>
    );
    return (
      <Container style={styles.container}>

         <Header>
                    <Left>
                        <Button transparent onPress={this.props.openDrawer}>
                          <Icon active name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Leads</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
        <Content padder>


            {listItem}

        </Content>
        <View>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => Actions.leadsEditView()}>
            <Icon name="add" />
          </Fab>
        </View>
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

export default connect(mapStateToProps, bindAction)(Leads);
