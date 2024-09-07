import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { usePortfolio } from '../../hooks/usePortfolio';
import { PortfolioItem } from '../../types/portfolio';
import { DeleteIcon, EditIcon } from '../Icons/Icons';

interface Props {
	id: PortfolioItem['id'];
	ticker: PortfolioItem['ticker'];
	crypto: PortfolioItem['crypto'];
	purchasePrice: PortfolioItem['purchasePrice'];
	amount: PortfolioItem['amount'];
}

export function CryptoItem({
	id,
	ticker,
	crypto,
	purchasePrice,
	amount,
}: Props) {
	const { deleteItem } = usePortfolio();

	const handlerOnPressDelete = (id: PortfolioItem['id']) => () => {
		deleteItem(id);
	};

	return (
		<View style={styles.row}>
			<Text style={styles.cell}>{ticker}</Text>
			<Text style={styles.cell}>{crypto}</Text>
			<Text style={styles.cell}>{purchasePrice.toFixed(3)}$</Text>
			<Text style={styles.cell}>{amount}</Text>
			<Text style={styles.cell}>{(purchasePrice * amount).toFixed(2)}$</Text>
			<Link
				href={`/portfolio/${id}`}
				asChild
			>
				<TouchableOpacity>
					<EditIcon />
				</TouchableOpacity>
			</Link>
			<TouchableOpacity onPress={handlerOnPressDelete(id)}>
				<DeleteIcon />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#6b6b6b',
		paddingVertical: 10,
	},
	cell: {
		flex: 1,
		textAlign: 'center',
		padding: 5,
		fontSize: 12,
	},
});
