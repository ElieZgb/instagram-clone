import React from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Pressable,
	Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase } from "../../firebase.js";

const LoginFormSchema = Yup.object().shape({
	email: Yup.string().email().required("An email is required."),
	password: Yup.string()
		.required()
		.min(8, "Your password has to have at least 8 characters"),
});

const onLogin = async (email, password) => {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		console.log("Firebase login successfully", email, password);
	} catch (error) {
		Alert.alert("Something's wrong", "The username or password is invalid!");
	}
};

const LoginForm = ({ navigation }) => {
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={(values) => {
				onLogin(values.email, values.password, navigation);
			}}
			validationSchema={LoginFormSchema}
			validateOnMount={true}
		>
			{({
				handleChange,
				handleSubmit,
				handleBlur,
				values,
				isValid,
				errors,
			}) => (
				<View>
					<TextInput
						style={[
							styles.inputField,
							{
								borderColor:
									values.email.length < 1 || Validator.validate(values.email)
										? "#aaa"
										: "red",
							},
						]}
						placeholder="Phone number, username or email"
						autoCapitalize="none"
						keyboardType="email-address"
						textContentType="emailAddress"
						autoFocus={false}
						onChangeText={handleChange("email")}
						onBlur={handleBlur("email")}
						value={values.email}
					/>
					<TextInput
						style={[
							styles.inputField,
							{
								borderColor:
									values.password.length < 1 || values.password.length >= 8
										? "#aaa"
										: "red",
							},
						]}
						placeholder="password"
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry={true}
						textContentType="password"
						onChangeText={handleChange("password")}
						onBlur={handleBlur("password")}
						value={values.password}
					/>
					<View
						style={{
							alignItems: "flex-end",
							marginBottom: 30,
							marginRight: 50,
						}}
					>
						<Text style={{ color: "#6bb0f5" }}>Forgot Password</Text>
					</View>
					<Pressable onPress={handleSubmit} style={styles.button(isValid)}>
						<Text style={{ color: "#fff", fontWeight: "700" }}>Log In</Text>
					</Pressable>

					<View style={styles.signUpContainer}>
						<Text style={{ color: "#777" }}>Don't have an account yet? </Text>
						<TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
							<Text style={{ color: "#0096f6", fontWeight: "600" }}>
								Sign Up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	inputField: {
		paddingVertical: 7,
		paddingLeft: 10,
		borderWidth: 1,
		borderRadius: 4,
		marginHorizontal: 50,
		marginBottom: 10,
	},
	button: (isValid) => ({
		marginHorizontal: 50,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		backgroundColor: isValid ? "#0096f6" : "#9acaf7",
	}),
	signUpContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
		paddingVertical: 10,
		flexDirection: "row",
	},
});

export default LoginForm;
