import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { CryptoForm } from '../../components';

export function CryptoFormScreen() {
	const { id }: { id: string } = useLocalSearchParams();

	return (
		<ScrollView style={styles.section}>
			<Text style={styles.h2}>
				{id == null ? 'Agregar' : 'Editar'} Criptomoneda
			</Text>
			<CryptoForm />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	section: {
		flex: 1,
		flexDirection: 'column',
		gap: 40,
		padding: 20,
	},
	h2: {
		fontSize: 42,
		textAlign: 'center',
		marginBottom: 20,
	},
});
