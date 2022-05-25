import React from "react";
import { View, Text, Image } from "react-native";

export default function CommentElement({ comment }) {
	return (
		<View
			style={{
				flexDirection: "row",
				paddingHorizontal: 15,
				paddingVertical: 15,
			}}
		>
			<View>
				{/* <Image source={{uri: 'https://picsum.photos/1000'}} style={{width: 40, height: 40, borderRadius: 100}} /> */}
				<Image
					source={{ uri: comment.profile_picture }}
					style={{ width: 40, height: 40, borderRadius: 100 }}
				/>
			</View>
			<View style={{ flex: 1, marginLeft: 15 }}>
				<CommentContent comment={comment} />
				<CommentFooter />
			</View>
		</View>
	);
}

const CommentContent = ({ comment }) => (
	<View>
		<Text style={{ fontWeight: "500" }}>
			{comment.user}
			<Text style={{ fontWeight: "normal" }}> {comment.text}</Text>
		</Text>
	</View>
);

const CommentFooter = () => (
	<View style={{ marginTop: 3 }}>
		<Text style={{ color: "#999", fontSize: 13 }}>
			0 likes &nbsp;&nbsp;&nbsp;&nbsp;Reply
		</Text>
	</View>
);
