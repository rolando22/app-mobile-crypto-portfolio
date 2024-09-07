import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokenService = (key: string, value: string) => {
	AsyncStorage.setItem(key, value);
};

export const getTokenService = async (key: string) => {
	return (await AsyncStorage.getItem(key)) ?? '';
};

export const removeTokenService = (key: string) => {
	AsyncStorage.removeItem(key);
};
