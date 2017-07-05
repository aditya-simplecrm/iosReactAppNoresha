import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon,
  Text, List, ListItem } from 'native-base';

class Meeting extends Component {
    render() {
        console.log('Meeting props: ', this.props);

        return (
            <Container>
                <Header>
                    <Title>Meeting</Title>
                </Header>

                <Content>
                <Content>
                <List>
                    <ListItem>
                        <Text>{this.props.name}</Text>
                    </ListItem>
                </List>
            </Content>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button transparent>
                            <Icon name='ios-call' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default View2;