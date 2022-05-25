import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/home/Header.js';
import Stories from '../components/home/Stories.js';
import Post from '../components/home/Post.js';
import FooterTab from '../components/home/FooterTab.js';
import { firebase,db } from '../firebase.js';

const HomeScreen = ({navigation}) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collectionGroup('posts').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
			setPosts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
		});
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation}/>
			<Stories />
			<ScrollView vertical showsVerticalScrollIndicator={false}>
				{posts.map((post, index) => {
					return <Post post={post} key={index} navigation={navigation}/>
				})}
			</ScrollView>
			<FooterTab />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	}
})

export default HomeScreen;