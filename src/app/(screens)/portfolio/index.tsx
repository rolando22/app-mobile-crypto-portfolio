import { PortfolioScreen } from '../../../screens';
import { Screen } from '../../../components';
import { StyleSheet, View } from 'react-native';

export default function Portfolio() {
	return (
		<Screen>
			<View style={styles.main}>
				<PortfolioScreen />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		width: '75%',
		marginHorizontal: '12.5%',
	},
});
