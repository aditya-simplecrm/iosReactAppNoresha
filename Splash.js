import React, { Component } from 'react';
import {View} from 'react-native';
import { Image, AsyncStorage } from 'react-native';
export default class Splash extends component{
	const background = require('../../../images/simplecrm_logo_1.png');
	render(){
		return{
			<View>
                 <Image source={background}></Image>
            </View>
		};
	}
}