import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import CommentElement from "../components/CommentElement";
import { firebase, db } from "../firebase";

export default function CommentsScreen({ navigation, route }) {
	const { post } = route.params;
	const [comment, setComment] = useState("");
	const [currentUser, setCurrentUser] = useState(null);

	const getCurrentUser = async () => {
		const usersColl = await firebase.firestore().collection("users").get();
		const users = usersColl.docs.map((user) => user.data());
		const currentUser = users.find(
			(user) => user.email === firebase.auth().currentUser.email
		);
		setCurrentUser(currentUser);
	};

	useEffect(() => {
		getCurrentUser();
	}, []);

	const handleComment = async (comment, post) => {
		db.collection("users")
			.doc(post.owner_email)
			.collection("posts")
			.doc(post.id)
			.update({
				comments: firebase.firestore.FieldValue.arrayUnion({
					user: currentUser.username,
					text: comment,
				}),
			})
			.then(() => navigation.goBack())
			.catch((error) => console.log("Error posting comment: ", error));
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
				<Header navigation={navigation} />
				<ScrollView showsVerticalScrollIndicator={false}>
					{post.comments.map((comment, index) => {
						return <CommentElement comment={comment} key={index} />;
					})}
				</ScrollView>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<CommentInput
						post={post}
						comment={comment}
						setComment={setComment}
						currentUser={currentUser}
						handleComment={handleComment}
					/>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const Header = ({ navigation }) => (
	<View>
		<View style={styles.commentsHeader}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={{ position: "absolute", left: 15 }}
			>
				<Image
					source={require("../assets/back-icon.png")}
					style={{ width: 35, height: 35 }}
				/>
			</TouchableOpacity>
			<Text style={{ fontWeight: "700", fontSize: 20 }}>Comments</Text>
		</View>
		<Divider width={1} orientation="vertical" />
	</View>
);

const CommentInput = ({
	comment,
	post,
	setComment,
	currentUser,
	handleComment,
}) => (
	<View>
		<Divider width={1} orientation="vertical" />
		<View style={styles.commentInputWrapper}>
			<Image
				source={{
					uri: "https://instagram.fbey5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/273641548_351407246777108_2602533226680063418_n.jpg?_nc_ht=instagram.fbey5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=B-Xmud1s2Q0AX-OJSsD&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8-NsvbLKxLEC8OeuX636lePSRmT9BIDMXgxic_WuBd-A&oe=621B7907&_nc_sid=9a90d6",
				}}
				style={{ borderRadius: 100, width: 40, height: 40, marginRight: 5 }}
			/>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					borderWidth: 1,
					borderRadius: 20,
					borderColor: "#ccc",
				}}
			>
				<TextInput
					style={styles.commentInput}
					placeholder="Add a comment..."
					autoFocus={true}
					multiline={true}
					onChange={(e) => setComment(e.nativeEvent.text)}
				/>
				<TouchableOpacity
					disabled={comment.trim() ? false : true}
					onPress={() => handleComment(comment, post)}
					style={styles.commentBtn}
				>
					<Text
						style={{
							color: comment.trim() ? "#0096f6" : "#aadaf7",
							fontWeight: "700",
							fontSize: 15,
						}}
					>
						Post
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	commentsHeader: {
		position: "relative",
		borderColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 15,
		marginTop: 10,
	},
	commentInputWrapper: {
		flexDirection: "row",
		borderRadius: 25,
		borderColor: "#ccc",
		marginVertical: 5,
		marginHorizontal: 10,
	},
	commentInput: {
		fontSize: 15,
		paddingTop: 10,
		paddingLeft: 20,
		paddingBottom: 10,
		flex: 1,
	},
	commentBtn: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 5,
		paddingRight: 10,
		height: 40,
	},
});
