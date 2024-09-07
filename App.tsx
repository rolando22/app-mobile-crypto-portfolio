import { StatusBar } from 'expo-status-bar';

import { Screen } from './src/components';
import { LoginScreen } from './src/screens';

export function App() {
	return (
		<Screen>
			<LoginScreen />
			<StatusBar style='auto' />
		</Screen>
	);
}
