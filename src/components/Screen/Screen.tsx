import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
	children: React.ReactNode;
}

export function Screen({ children }: Props) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		minHeight: '100%',
	},
});
