import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { usePortfolio } from '../../hooks/usePortfolio';

export function CryptoForm() {
	const { id }: { id: string } = useLocalSearchParams();
	const { item, addItem, editItem } = usePortfolio(parseInt(id ?? '0'));

	const [ticker, setTicker] = useState('');
	const [crypto, setCrypto] = useState('');
	const [purchasePrice, setPurchasePrice] = useState('');
	const [amount, setAmount] = useState('');

	useEffect(() => {
		setTicker(item?.ticker || '');
		setCrypto(item?.crypto || '');
		setPurchasePrice(item?.purchasePrice?.toString() || '');
		setAmount(item?.amount?.toString() || '');
	}, [item]);

	const handlerOnPress = () => {
		if (!ticker && !crypto && !purchasePrice && !amount) return;

		const newItem = {
			ticker,
			crypto,
			purchasePrice: parseFloat(purchasePrice),
			amount: parseFloat(amount),
		};

		if (id == null) {
			addItem(newItem);
		} else {
			editItem(parseInt(id), newItem);
		}
		router.navigate('/portfolio');
	};

	const handlerOnPressCancel = () => {
		router.navigate('/portfolio');
	};

	return (
		<View style={styles.form}>
			<View style={styles.formItem}>
				<Text>Símbolo</Text>
				<TextInput
					style={styles.input}
					value={ticker}
					placeholder='BTC, ETH, BNB...'
					onChangeText={setTicker}
				/>
			</View>
			<View style={styles.formItem}>
				<Text>Cripto</Text>
				<TextInput
					style={styles.input}
					value={crypto}
					placeholder='Bitcoin, Ethereum...'
					onChangeText={setCrypto}
				/>
			</View>
			<View style={styles.formItem}>
				<Text>Precio de Compra</Text>
				<TextInput
					style={styles.input}
					value={purchasePrice}
					keyboardType='numeric'
					onChangeText={setPurchasePrice}
				/>
			</View>
			<View style={styles.formItem}>
				<Text>Cantidad</Text>
				<TextInput
					style={styles.input}
					value={amount}
					keyboardType='numeric'
					onChangeText={setAmount}
				/>
			</View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handlerOnPress}
				>
					{id == null ? 'Agregar' : 'Editar'}
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={handlerOnPressCancel}
				>
					Cancelar
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 20,
	},
	formItem: {
		marginBottom: 24,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 8,
		marginTop: 6,
		borderRadius: 5,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		gap: 20,
	},
	button: {
		backgroundColor: '#09f',
		color: '#fff',
		padding: 10,
	},
});
