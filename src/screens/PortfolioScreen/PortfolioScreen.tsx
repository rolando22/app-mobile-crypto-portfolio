import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

import { CryptoItem } from '../../components';
import { usePortfolio } from '../../hooks/usePortfolio';
import { useAuth } from '../../hooks/useAuth';

const tableTitles = [
	'Símbolo',
	'Cripto',
	'Entrada', //Precio de compra
	'Cant',
	'Inversión',
	'Editar',
	'Eliminar',
];

export function PortfolioScreen() {
	const { portfolio } = usePortfolio();
	const { logout } = useAuth();

	const handlerOnPressLogout = () => {
		logout();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Portafolio de Criptomonedas</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={handlerOnPressLogout}
			>
				Cerrar Sesión
			</TouchableOpacity>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.linkStyled}
					onPress={() => router.navigate('/cryptoform')}
				>
					<Text style={styles.linkText}>Agregar Cripto</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.table}>
				<FlatList
					data={portfolio}
					ListHeaderComponent={
						<View style={styles.tableHeader}>
							{tableTitles.map(title => (
								<Text
									style={styles.tableHeaderCell}
									key={title}
								>
									{title}
								</Text>
							))}
						</View>
					}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						<CryptoItem
							key={item.id}
							id={item.id}
							ticker={item.ticker}
							crypto={item.crypto}
							purchasePrice={item.purchasePrice}
							amount={item.amount}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	button: {
		padding: 10,
		borderRadius: 5,
		fontSize: 16,
		textAlign: 'right',
	},
	buttonContainer: {
		width: '100%',
		marginBottom: 20,
	},
	linkStyled: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#09f',
		alignItems: 'center',
	},
	linkText: {
		color: 'white',
		fontSize: 16,
	},
	table: {
		width: '100%',
	},
	tableHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tableHeaderCell: {
		flex: 1,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 10,
	},
});
