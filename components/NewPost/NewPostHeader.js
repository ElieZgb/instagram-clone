import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const NewPostHeader = ({navigation}) => {
	return (
		<View>
			<View style={styles.wraper}>
				<TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', left: 15}}><Image source={require('../../assets/back-icon.png')} style={{width: 35, height: 35,}}/></TouchableOpacity>
				<Text style={styles.newPostHeader}>New Post</Text>
			</View>
			<Divider width={1} orientation='vertical' />
		</View>
	)
}

const styles = StyleSheet.create({
	wraper: {
		position: 'relative',
		borderColor: '#fff',
		justifyContent:'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 15,
		marginTop: 10
	},
	newPostHeader: {
		fontWeight: '700',
		fontSize: 20
	},
})

export default NewPostHeader