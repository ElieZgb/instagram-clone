import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase.js';

const handleSignOut = async() => {
	try{
		await firebase.auth().signOut();
		console.log("Signed out");
	}catch(error){
		Alert.alert(error.message)
	}
}

const Header = ({navigation}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleSignOut}>
				<Image 
					source={require('../../assets/header-logo.png')} 
					style={styles.logo}
				/>	
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
					<Image 
						source={require('../../assets/add-icon.png')} 
						style={styles.icon}
					/>	
				</TouchableOpacity>
				<TouchableOpacity>
					<Image 
						source={require('../../assets/heart-icon.png')} 
						style={styles.icon}
					/>	
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadBadgeText}>4</Text>
					</View>
					<Image 
						source={require('../../assets/dms-icon.png')} 
						style={styles.icon}
					/>	
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
		flexDirection: 'row'
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain'
	},
	iconsContainer: {
		flexDirection: 'row'
	},
	icon: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
		marginLeft: 20
	},
	unreadBadge: {
		backgroundColor: 'red',
		width: 20,
		height: 17,
		position: 'absolute',
		top: -5,
		right: -6,
		zIndex: 100,
		borderRadius: 9,
		justifyContent: 'center',
		alignItems: 'center'
	},
	unreadBadgeText: {
		color: '#fff',
		fontSize: 13,
		fontWeight: '600'
	}
})

export default Header