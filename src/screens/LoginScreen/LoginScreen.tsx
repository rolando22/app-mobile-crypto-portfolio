import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { LoginForm } from '../../components';

export function LoginScreen() {
	return (
		<View style={styles.section}>
			<Text style={styles.h2}>Inicio de Sesión</Text>
			<LoginForm />
			<TouchableOpacity onPress={() => router.navigate('register')}>
				<Text style={styles.link}>Registrarse</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	section: {
		display: 'flex',
		flexDirection: 'column',
		gap: 25,
		padding: 16,
	},
	h2: {
		fontSize: 42,
		textAlign: 'center',
	},
	link: {
		textDecorationLine: 'underline',
		color: 'blue',
		textAlign: 'center',
		marginTop: 20,
	},
});
