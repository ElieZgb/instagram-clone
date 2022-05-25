import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { users } from "../../data/users.js";
import { SvgXml } from "react-native-svg";
import svgIcons from "../../assets/svg-icons.js";

const Stories = () => {
	return (
		<View style={{ marginTop: 6, marginBottom: 10 }}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View
					style={{
						marginLeft: 5,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View>
						{/* <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'}} style={[styles.story, {borderWidth: 0}]}/> */}
						<Image
							source={{
								uri: "https://instagram.fbey5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/273641548_351407246777108_2602533226680063418_n.jpg?_nc_ht=instagram.fbey5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=B-Xmud1s2Q0AX-OJSsD&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8-NsvbLKxLEC8OeuX636lePSRmT9BIDMXgxic_WuBd-A&oe=621B7907&_nc_sid=9a90d6",
							}}
							style={[styles.story, { borderWidth: 0 }]}
						/>
						<View
							style={{
								borderWidth: 1,
								borderColor: "#fff",
								backgroundColor: "#fff",
								position: "absolute",
								borderRadius: 100,
								bottom: -2,
								right: -2,
							}}
						>
							<SvgXml xml={svgIcons[3].svg} width="25" height="25" />
						</View>
					</View>
					<Text style={styles.storyText} numberOfLines={1}>
						Your Story
					</Text>
				</View>
				{users.map((user, index) => {
					return (
						<View
							key={index}
							style={{
								marginHorizontal: 3,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{/* <View style={{borderColor: '#ff3535', borderWidth: 2,borderRadius: 100}}><Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'}} style={styles.story}/></View> */}
							<View
								style={{
									borderColor: "#ff3535",
									borderWidth: 2,
									borderRadius: 100,
								}}
							>
								<Image source={{ uri: user.image }} style={styles.story} />
							</View>
							<Text style={styles.storyText} numberOfLines={1}>
								{user.user}
							</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	story: {
		width: 65,
		height: 65,
		borderRadius: 100,
		resizeMode: "cover",
		borderColor: "#fff",
		borderWidth: 2.5,
	},
	storyText: {
		color: "#000",
		width: 75,
		textAlign: "center",
		marginHorizontal: 0,
		marginTop: 5,
		fontSize: 12,
	},
	shadowProp: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
});

export default Stories;
