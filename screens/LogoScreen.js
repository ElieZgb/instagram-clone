import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'

const LogoScreen = () => {
	return (
		<SafeAreaView style={{flex: 1, alignItems: 'center', position: 'relative'}}>
			<View style={{marginTop: 150}}>
				<Image source={require('../assets/insta-logo.png')} style={{width: 80, height: 80}}/>
			</View>
			<View style={{position: 'absolute', bottom: 60}}>
				<Text style={styles.text}>from</Text>
				<Text style={styles.text}>Facebook</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontSize: 15,
		color: '#aaa'
	}
})

export default LogoScreen