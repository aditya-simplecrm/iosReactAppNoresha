

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  sidebar: {
    flex: 1,
    padding: 10,
    paddingRight: 0,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  logo1: {
    // flex: 150   // paddingTop: 20,
    borderWidth:1,
    borderRadius:50,
    marginLeft: 75,
    marginTop:20,
    marginBottom:20,
    paddingBottom: 0,
    marginBottom: 0,
    width: 100,
    resizeMode: 'contain',
    height: 100,
  },
  home:{
  	backgroundColor: '#7A0B44',
  	width:10,
  	height: 10,
  	borderRadius:5,
  	padding:15,
  	 },
  leads:{
  	backgroundColor: '#4E9ACF',
  	width:10,
  	height: 10,
  	borderRadius:5,
  	padding:15,
  	 },
 logout:{
  	backgroundColor: '#EC5152',
  	width:10,
  	height: 10,
  	borderRadius:5,
  	padding:15,
  	 }
};
