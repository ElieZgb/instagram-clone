import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen.js';
import NewPostScreen from './NewPostScreen.js';
import LoginScreen from './LoginScreen.js';
import SignupScreen from './SignupScreen.js';
import CommentsScreen from './CommentsScreen.js';

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false
}

export const SignedInStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="NewPostScreen" component={NewPostScreen} />
				<Stack.Screen name='CommentsScreen' component={CommentsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export const SignedOutStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="SignupScreen" component={SignupScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
} 