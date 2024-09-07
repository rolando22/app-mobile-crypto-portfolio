import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import { useAuth } from '../../hooks/useAuth';

export function LoginForm() {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlerOnPressLogin = () => {
		if (email === '' && password === '') return;
		login({ email, password });
	};

	return (
		<View style={styles.form}>
			<View style={styles.formItem}>
				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder='mail@gmail.com'
					value={email}
					onChangeText={setEmail}
					keyboardType='email-address'
					autoCapitalize='none'
				/>
			</View>
			<View style={styles.formItem}>
				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.input}
					placeholder='********'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					autoCapitalize='none'
				/>
			</View>
			<View style={styles.formItem}>
				<TouchableOpacity
					style={styles.button}
					onPress={handlerOnPressLogin}
				>
					<Text style={styles.buttonText}>Ingresar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: 24,
		padding: 16,
	},
	formItem: {
		display: 'flex',
		flexDirection: 'column',
		gap: 6,
		marginBottom: 16,
	},
	label: {
		marginBottom: 6,
		fontSize: 16,
	},
	input: {
		padding: 8,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
	},
	button: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#007bff',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
});
