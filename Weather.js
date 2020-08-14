import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
	Haze: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', 'D39D38'],
		title: 'Haze',
		subtitle: "Just don't go outside.",
	},
	Thunderstorm: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', 'D39D38'],
		title: 'Thunderstorm in the house',
		subtitle: 'Actually, outside of the house',
	},
	Drizzle: {
		iconName: 'weather-hail',
		gradient: ['#89F7FE', '#66A6FF'],
		title: 'Drizzel',
		subtitle: 'You have to be careful',
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: ['#00C6FB', '#005BEA'],
		title: '',
		subtitle: '',
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: ['#7DE2FC', '#B9B6E5'],
		title: 'Cold as balls',
		subtitle: 'Do you want to build a snowman? Fuck no.',
	},
	Atmosphere: {
		iconName: 'weather-hail',
		gradient: ['#89F7FE', '#66A6FF'],
		title: 'Atom',
		subtitle: 'Atom is great',
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#FEF253', '#FF7300'],
		title: 'Sunny as fuck',
		subtitle: 'Go get your ass burnt',
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#D7D2CC', '#304352'],
		title: 'Cloudy',
		subtitle: "I don't like Cloudy",
	},
	Mist: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', '#D39D38'],
		title: 'Misty',
		subtitle: 'Mist is good for you skin',
	},
	Dust: {
		iconName: 'weather-hail',
		gradient: ['#4DA0B0', '#D39D38'],
		title: 'Dusty',
		subtitle: 'Thanks a lot China',
	},
};

export default function Weather({ temp }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
					size={96}
					color="white"
				/>
				<Text style={styles.temp}>{temp}</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>
					{weatherOptions[condition].subtitle}
				</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Atmosphere',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Dust',
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temp: {
		fontSize: 42,
		color: 'white',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
	},
	subtitle: {
		fontWeight: '600',
		color: 'white',
		fontSize: 24,
	},
	textContaiber: {
		alignItems: 'flex-start',
	},
});
