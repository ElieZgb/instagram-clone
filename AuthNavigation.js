import React, { useState, useEffect } from 'react';
import { SignedInStack, SignedOutStack } from './screens/Navigation.js';
import { firebase } from './firebase.js';
import LogoScreen from './screens/LogoScreen.js';

const AuthNavigation = () => {
	const [currentUser, setCurrentUser] = useState(null);

	async function resumeSession(){
		await firebase.auth().onAuthStateChanged((user) => user ? setCurrentUser(user) : setCurrentUser(null));
	}

	useEffect(()=>{
		resumeSession()
	}, [])

	// useEffect(
	// 	() => firebase.auth().onAuthStateChanged((user) => {
	// 		user ? setCurrentUser(user) : setCurrentUser(null)
	// 		// If the auth instance returns a user, setCurrentUser(User)
	// 		// else (means the auth returns null) setCurrentUser(null)

	// 		// Side Note: Once the user logs in (ex: firebase.auth().signInWithEmailAndPassword(email, password) (line 15 in LoginForm.js)),
	// 		// that user becomes the current user of the Auth instance. So untill that user logs out (ex: ) that user
	// 		// will keep on being the user of the Auth instance

	// 	}),
	// 	[]
	// )

	return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation