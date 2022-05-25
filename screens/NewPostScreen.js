import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import NewPostHeader from '../components/NewPost/NewPostHeader.js';
import FormikPostUploader from '../components/NewPost/FormikPostUploader.js'

const NewPostScreen = ({navigation}) => {
	return (
		<SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
			<NewPostHeader navigation={navigation}/>
			<FormikPostUploader navigation={navigation}/>
		</SafeAreaView>
	)
}

export default NewPostScreen