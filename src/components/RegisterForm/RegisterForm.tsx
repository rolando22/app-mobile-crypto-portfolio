import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import { useAuth } from '../../hooks/useAuth';

export function RegisterForm() {
	const { register } = useAuth();
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const handleInputChange = (name: string, value: string) => {
		setForm({ ...form, [name]: value });
	};

	const handleOnPressRegister = () => {
		const { firstName, lastName, email, password } = form;
		if (firstName === '' && lastName === '' && email === '' && password === '')
			return;
		register({ firstName, lastName, email, password });
	};

	return (
		<View style={styles.form}>
			<View style={styles.formItem}>
				<Text>Nombre</Text>
				<TextInput
					style={styles.input}
					placeholder='Juan'
					value={form.firstName}
					onChangeText={value => handleInputChange('firstName', value)}
				/>
			</View>
			<View style={styles.formItem}>
				<Text>Apellido</Text>
				<TextInput
					style={styles.input}
					placeholder='Perez'
					value={form.lastName}
					onChangeText={value => handleInputChange('lastName', value)}
				/>
			</View>
			<View style={styles.formItem}>
				<Text>Email</Text>
				<TextInput
					style={styles.input}
					placeholder='mail@gmail.com'
					value={form.email}
					onChangeText={value => handleInputChange('email', value)}
					keyboardType='email-address'
				/>
			</View>
			<View style={styles.formItem}>
				<Text>Password</Text>
				<TextInput
					style={styles.input}
					placeholder='********'
					value={form.password}
					onChangeText={value => handleInputChange('password', value)}
					secureTextEntry={true}
				/>
			</View>
			<View style={styles.formItem}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleOnPressRegister}
				>
					<Text style={styles.buttonText}>Registrarse</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: 16,
		padding: 10,
	},
	formItem: {
		display: 'flex',
		flexDirection: 'column',
		gap: 6,
		marginBottom: 12,
	},
	input: {
		padding: 8,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		marginTop: 2,
	},
	button: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#007BFF',
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
	},
});
