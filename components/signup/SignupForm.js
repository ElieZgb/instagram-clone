import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { firebase, db } from '../../firebase';

const SignupFormSchema = Yup.object().shape({
	email: Yup.string().email().required('An email is required.'),
	username: Yup.string().required().min(4, 'Your username has to have at least 3 characters'),
	password: Yup.string().required().min(8, 'Your password has to have at least 8 characters')

})

const onSignup = async(email, password, username) => {
	try{
		const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
		console.log("Firebase Create User successfully!", email, password)

		db.collection("users").doc(authUser.user.email).set({
			owner_uid: authUser.user.uid,
			username: username,
			email: authUser.user.email,
		})

	}catch(error){
		Alert.alert(error.message);
	}
}

const SignupForm = ({navigation}) => {
	return (
		<Formik 
		initialValues = {{email: '', username: '', password: ''}}
		onSubmit={(values)=>{
			onSignup(values.email, values.password, values.username);
		}}
		validationSchema = {SignupFormSchema}
		validateOnMount = {true}
		>
		{ ({handleChange, handleSubmit, handleBlur, values, errors, isValid}) => (
		<View>
			<TextInput style={[styles.inputField, {
				borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#aaa' : 'red'
			}]}
				placeholder="email"
				autoCapitalize = 'none'
				keyboardType = 'email-address'
				textContentType = 'emailAddress'
				autoFocus = {false}
				onChangeText={handleChange('email')}
				onBlur={handleBlur('email')}
				value={values.email}
			/>
			<TextInput style={[styles.inputField, {
				borderColor: values.username.length > 3 || values.username.length < 1 ? '#aaa' : 'red'
			}]}
				placeholder="username"
				autoCapitalize = 'none'
				autoCorrect = {false}
				textContentType = 'username'
				onChangeText={handleChange('username')}
				onBlur={handleBlur('username')}
				value={values.username}
			/>
			<TextInput style={[styles.inputField, {
				borderColor: values.password.length > 7 || values.password.length < 1 ? '#aaa' : 'red'
			}]}
				placeholder="password"
				autoCapitalize = 'none'
				autoCorrect = {false}
				secureTextEntry = {true}
				textContentType = 'password'
				onChangeText={handleChange('password')}
				onBlur={handleBlur('password')}
				value={values.password}
			/>
			<Pressable style={styles.button(isValid)} onPress={handleSubmit}>
				<Text style={{color: '#fff', fontWeight:'700'}}>Sign Up</Text>
			</Pressable>

			<View style={styles.signUpContainer}>
				<Text style={{color: '#777'}}>Already have an account? </Text>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={{color:"#0096f6", fontWeight:'600'}}>Log In</Text>
				</TouchableOpacity>
			</View>
		</View>
		)}
		</Formik>
	)
}

const styles = StyleSheet.create({
	inputField: {
		paddingVertical: 7,
		paddingLeft: 10,
		borderWidth: 1,
		borderRadius: 4,
		marginHorizontal: 50,
		marginBottom: 15
	},
	button: isValid => ({
		marginHorizontal: 50,
		paddingVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		backgroundColor: isValid ? '#0096f6':'#9acaf7',
	}),
	signUpContainer: {
		justifyContent :'center',
		alignItems: 'center',
		marginTop: 8,
		paddingVertical: 10,
		flexDirection: 'row'
	}
})

export default SignupForm