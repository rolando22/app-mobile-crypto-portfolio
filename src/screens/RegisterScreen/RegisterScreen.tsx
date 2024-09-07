import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

import { RegisterForm } from '../../components';

export function RegisterScreen() {
	return (
		<ScrollView style={styles.section}>
			<Text style={styles.h2}>Registro de Usuario</Text>
			<RegisterForm />
			<TouchableOpacity onPress={() => router.navigate('/')}>
				<Text style={styles.link}>Iniciar Sesión</Text>
			</TouchableOpacity>
		</ScrollView>
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
		marginBottom: 20,
		textAlign: 'center',
	},
	link: {
		textDecorationLine: 'underline',
		color: 'blue',
		textAlign: 'center',
		marginTop: 20,
		fontSize: 16,
	},
});
