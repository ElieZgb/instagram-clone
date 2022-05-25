import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import SignupForm from '../components/signup/SignupForm.js';

const SignupScreen = ({navigation}) => {
	return (
		<SafeAreaView>
			<View style={styles.logo}>
				<Image source={require('../assets/insta-logo.png')} style={{width: 80, height: 80}}/>
			</View>
			<SignupForm navigation={navigation}/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 100,
		marginBottom: 70,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default SignupScreen