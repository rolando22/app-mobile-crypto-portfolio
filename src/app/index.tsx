import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { LoginScreen } from '../screens';
import { Screen } from '../components';
import { getTokenService } from '../services';
import { config } from '../config';

const { tokenZergexKey } = config;

export default function Index() {
	const [isUserSigin, setIsUserSigin] = useState<string>('');

	useEffect(() => {
		(async () => {
			let token = await getTokenService(tokenZergexKey);
			setIsUserSigin(token);
		})();

		if (isUserSigin) router.navigate('/portfolio');
	}, [isUserSigin]);

	return (
		<Screen>
			<LoginScreen />
			<StatusBar style='auto' />
		</Screen>
	);
}
