import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Detail extends Component{
	render(){
		return(
			<View 
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Text>Ini Detail</Text>
				<Button 
				title="kembali ke Home"
				onPress={() => this.props.navigation.goBack()}
				></Button>
			</View>
		);
	}
}