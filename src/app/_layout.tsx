import { View } from 'react-native';
import { Stack } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Layout() {
	return (
		<QueryClientProvider client={queryClient}>
			<View style={{ flex: 1 }}>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				/>
			</View>
		</QueryClientProvider>
	);
}
