import React, { useState } from 'react'
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SvgXml } from 'react-native-svg'
import svgIcons from '../../assets/svg-icons'

const FooterTab = () => {
	const [activeTab, setActiveTab] = useState('Home');

	return (
		<View>
			<Divider width={1} orientation="vertical" />
			<View style={styles.footerTab}>
				<TouchableOpacity onPress={() => setActiveTab('Home')}><SvgXml xml={activeTab == 'Home' ? svgIcons[0].filledSvg : svgIcons[0].outlineSvg } width='30' height='30' /></TouchableOpacity>
				<TouchableOpacity onPress={() => setActiveTab('Search')}><SvgXml xml={activeTab == 'Search' ? svgIcons[1].filledSvg : svgIcons[1].outlineSvg } width='30' height='30' /></TouchableOpacity>
				<TouchableOpacity onPress={() => setActiveTab('Reel')}><SvgXml xml={activeTab == 'Reel' ? svgIcons[2].filledSvg : svgIcons[2].outlineSvg } width='30' height='30' /></TouchableOpacity>
				<TouchableOpacity onPress={() => setActiveTab('Shop')}><MaterialCommunityIcons name={activeTab == 'Shop' ? 'shopping' : 'shopping-outline'} size={30} /></TouchableOpacity>
				<TouchableOpacity onPress={() => setActiveTab('User')}><FontAwesome name={activeTab == 'User' ? 'user-circle-o' : 'user-circle'} size={30} /></TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	footerTab: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingVertical: 10,
		alignItems: 'center'

	},
	footerIcon: {
		width: 30,
		height: 30,
	},
	profileIcon: {
		width: 30,
		height: 30,
		borderRadius: 30
	}
})

export default FooterTab;