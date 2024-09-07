import { Login } from '../types/auth';
import { config } from '../config';
import { getTokenService } from './token.service';
import { CreateUserDTO, User } from '../types/user';

const { apiUrl, tokenZergexKey } = config;

export const loginService = async (dto: Login): Promise<string | null> => {
	const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dto),
	});
	if (!response.ok) return null;
	const { data } = await response.json();
	const { token } = data;
	return token;
};

export const registerService = async (
	dto: CreateUserDTO,
): Promise<User | null> => {
	const response = await fetch(`${apiUrl}/api/v1/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dto),
	});
	if (!response.ok) return null;
	const { data } = await response.json();
	return data;
};

export const getProfileService = async (): Promise<User | null> => {
	const token = await getTokenService(tokenZergexKey);
	if (token == null) return null;
	const response = await fetch(`${apiUrl}/api/v1/auth/profile`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) return null;
	const { user } = await response.json();
	return user;
};
