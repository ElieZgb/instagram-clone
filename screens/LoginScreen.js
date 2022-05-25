import React from 'react'
import { View, StyleSheet, Image, SafeAreaView } from 'react-native'
import LoginForm from '../components/login/LoginForm.js';

const LoginScreen = ({navigation}) => {
	return (
		<SafeAreaView>
			<View style={styles.logo}>
				<Image source={require('../assets/insta-logo.png')} style={{width: 80, height: 80}}/>
			</View>
			<LoginForm navigation={navigation}/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 100,
		marginBottom: 90,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default LoginScreen