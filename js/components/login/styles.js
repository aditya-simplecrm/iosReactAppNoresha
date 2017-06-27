
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  logo1: {
    // flex: 1,
    marginTop: deviceHeight / 6,
    marginLeft: 130,
    // paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 0,
    width: 120,
    resizeMode: 'contain',
    height: 100,
  },
logo2: {
    marginLeft: 80,
    width: 250,
    height: 60,
    resizeMode: 'contain'
  },
  bg: {
    // flex: 1,
    // marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    bottom: 0,
  },
  textCenter:{
    color: '#808080',
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#0d2340'
  },
};
