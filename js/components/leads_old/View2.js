import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon,
  Text, List, ListItem } from 'native-base';

class View2 extends Component {
    render() {
        console.log('View2 props: ', this.props);

        return (
            <Container>
                <Header>
                    <Title>Header</Title>
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