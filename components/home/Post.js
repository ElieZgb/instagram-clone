import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";

const Post = ({ post, navigation }) => {
	return (
		<View>
			<Divider orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<PostFooter post={post} navigation={navigation} />
		</View>
	);
};

const PostHeader = ({ post }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingHorizontal: 10,
				paddingVertical: 8,
				backgroundColor: "#fff",
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Image
					source={{ uri: post.profile_picture }}
					style={{ width: 35, height: 35, borderRadius: 40 }}
				/>
				<Text style={{ color: "#000", marginLeft: 10, fontWeight: "600" }}>
					{post.user}
				</Text>
			</View>
			<TouchableOpacity
				style={{ justifyContent: "center", alignItems: "center" }}
			>
				<Image
					style={{ width: 25, height: 25 }}
					source={require("../../assets/post-header-menu.png")}
				/>
			</TouchableOpacity>
		</View>
	);
};

const PostImage = ({ post }) => {
	return (
		<Image
			source={{ uri: post.imageURL }}
			style={{ width: "100%", height: 400, resizeMode: "cover" }}
		/>
	);
};

const PostFooter = ({ post, navigation }) => {
	const handleLikes = () => {
		const currentLikeStatus = !post.likes_by_users.includes(
			firebase.auth().currentUser.email
		);

		db.collection("users")
			.doc(post.owner_email)
			.collection("posts")
			.doc(post.id)
			.update({
				likes_by_users: currentLikeStatus
					? firebase.firestore.FieldValue.arrayUnion(
							firebase.auth().currentUser.email
					  )
					: firebase.firestore.FieldValue.arrayRemove(
							firebase.auth().currentUser.email
					  ),
			})
			.then(() => {
				console.log("Document updated successfully");
			})
			.catch((error) => {
				console.log("Error updating document: ", error);
			});
	};

	return (
		<View style={{ paddingHorizontal: 15 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					paddingVertical: 10,
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<TouchableOpacity onPress={() => handleLikes(post)}>
						<Image
							source={
								post.likes_by_users.includes(firebase.auth().currentUser.email)
									? require("../../assets/heart-icon-filled.png")
									: require("../../assets/heart-icon.png")
							}
							style={styles.footerIcon}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.push("CommentsScreen", { post: post })}
					>
						<Image
							source={require("../../assets/comment-icon.png")}
							style={styles.footerIcon}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							source={require("../../assets/share-icon.png")}
							style={[styles.footerIcon, { transform: [{ rotate: "45deg" }] }]}
						/>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity>
						<Image
							source={require("../../assets/save-icon.png")}
							style={[styles.footerIcon, { marginRight: 0 }]}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<PostLikes post={post} />
			<PostCaption post={post} />
			<PostCommentsSection post={post} navigation={navigation} />
			<PostComments post={post} />
		</View>
	);
};

const PostLikes = ({ post }) => {
	return (
		<Text style={{ color: "#000", fontWeight: "500" }}>
			{post.likes_by_users.length.toLocaleString("en")} likes
		</Text>
	);
};

const PostCaption = ({ post }) => {
	return (
		<Text style={{ color: "#000", marginTop: 7 }}>
			<Text style={{ fontWeight: "700" }}>{post.user}</Text> {post.caption}
		</Text>
	);
};

const PostCommentsSection = ({ post, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.push("CommentsScreen", { post: post })}
		>
			<View>
				{post.comments.length != 0 ? (
					<Text style={{ color: "#000", marginVertical: 5 }}>
						View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
						{post.comments.length > 1 ? "comments" : "comment"}
					</Text>
				) : null}
			</View>
		</TouchableOpacity>
	);
};

const PostComments = ({ post }) => {
	const firstTwoComments =
		post.comments.length > 1 ? post.comments.slice(0, 2) : null;
	return (
		<View style={{ marginBottom: 10 }}>
			{firstTwoComments
				? firstTwoComments.map((comment, index) => {
						return (
							<Text style={{ marginBottom: 2, color: "#000" }} key={index}>
								<Text style={{ fontWeight: "700" }}>{comment.user}</Text>{" "}
								{comment.text}
							</Text>
						);
				  })
				: post.comments.map((comment, index) => {
						return (
							<Text style={{ marginBottom: 2, color: "#000" }} key={index}>
								<Text style={{ fontWeight: "700" }}>{comment.user}</Text>{" "}
								{comment.text}
							</Text>
						);
				  })}
		</View>
	);
};

const styles = StyleSheet.create({
	footerIcon: {
		width: 30,
		height: 30,
		marginRight: 15,
	},
});

export default Post;
