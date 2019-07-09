import React, { Component } from 'react'; //seperti include, berasal dari node_moduls
import { View, Text, StyleSheet } from 'react-native';

export default class Articles extends Component {
	render() {
		return (
				<View style={styles.wrapper}>
					<Text style={styles.title}>
						{this.props.title}
					</Text>
					<Text style={styles.content}>
						{this.props.content}
					</Text>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper:{
		marginBottom: 15,
	},
	title:{
		fontSize: 20,
	},
	content:{
		fontSize: 11,
	},
}); 