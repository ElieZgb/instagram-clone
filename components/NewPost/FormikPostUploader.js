import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import { Divider } from 'react-native-elements'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { firebase, db } from '../../firebase.js';

const thumbnailImageSize = 100;
const PLACEHOLDER_IMG = `https://via.placeholder.com/${thumbnailImageSize}`;

const uploadPostSchema = Yup.object().shape({
	imageUrl: Yup.string().url().required('A url is required.'),
	caption: Yup.string().max(2200, 'Caption has reached its limit.')
})

const FormikPostUploader = ({navigation}) => {
	const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
	const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

	const getUsername = () => {
		const user = firebase.auth().currentUser;
		const unsubscribe = db.collection('users').where('owner_uid', '==', user.uid).limit(1).onSnapshot(
			(snapshot) => snapshot.docs.map(doc => {
				setCurrentLoggedInUser({
					username: doc.data().username
				})
			})
		)

		return unsubscribe;
	}

	useEffect(() => {
		getUsername()
	}, [])

	const uploadPostToFirebase = (caption, imageUrl) => {
		const unsubscribe = db.collection('users').doc(firebase.auth().currentUser.email).collection('posts')
		.add({
			imageURL: imageUrl,
			user: currentLoggedInUser.username,
			profile_picture: PLACEHOLDER_IMG,
			owner_uid: firebase.auth().currentUser.uid,
			owner_email: firebase.auth().currentUser.email,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			caption: caption,
			likes_by_users: [],
			comments: [],
		}).then(() => navigation.goBack());

		return unsubscribe;
	}

	return (
		<Formik initialValues={{caption: '', imageUrl: ''}} 
		onSubmit={(values) => {
			console.log("Post submitted successfully!");
			uploadPostToFirebase(values.caption, values.imageUrl);
		}} 
		validationSchema={uploadPostSchema}
		validateOnMount={true}
		>

			{ ({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
				<View>
					<View style={{flexDirection:'row', margin: 15}}>
						<Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} style={styles.img}/>
						<TextInput 
							style={{fontSize: 18, flex: 1}} 
							placeholder="Write a caption..." 
							placeholderTextColor="#aaa"
							multiline={true}
							onChangeText={handleChange('caption')}
							onBlur={handleBlur('caption')}
							value={values.caption}
						/>
					</View>
					<Divider width={1} orientation="vertical" />
					<View style={{height: 70}}>
						<TextInput 
							onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
							style={{fontSize: 14, marginTop: 15, marginLeft: 15}} 
							placeholder="Enter Image URL..." 
							placeholderTextColor="#aaa"
							onChangeText={handleChange('imageUrl')}
							onBlur={handleBlur('imageUrl')}
							value={values.imageUrl}
						/>

						<Text style={{color: '#ff3535', marginLeft: 15, marginTop:5}}>{errors.imageUrl}</Text>
					</View>
					<Button onPress={handleSubmit} title="share" disabled={!isValid} ></Button>
				</View>
			) }
		</Formik>
	)
}

const styles = StyleSheet.create({
	img: {
		width: thumbnailImageSize, 
		height: thumbnailImageSize,
		marginRight: 15
	}
})

export default FormikPostUploader




