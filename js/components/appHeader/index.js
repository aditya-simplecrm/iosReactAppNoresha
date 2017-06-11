/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Body, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native';
import { openDrawer } from '../../actions/drawer';
import { connect } from 'react-redux';

class AppHeader extends Component {
  static propTypes = {
    openDrawer: React.PropTypes.func,
  };
  render() {
    return (
            <Container>
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

});
const styles = StyleSheet.create({

});

export default connect(mapStateToProps, bindAction)(AppHeader);

