import { router } from 'expo-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	getProfileService,
	loginService,
	registerService,
	removeTokenService,
	setTokenService,
} from '../services';

import { CreateUserDTO, type User } from '../types/user';
import { type Login } from '../types/auth';

import { config } from '../config';

const { tokenZergexKey } = config;

export function useAuth() {
	const queryClient = useQueryClient();
	const {
		data: user,
		isLoading: isLoadingProfile,
		isError: isErrorProfile,
	} = useQuery<User | null>({
		queryKey: ['user'],
		queryFn: getProfileService,
	});

	const {
		mutate: loginMutate,
		isPending: isLoadingLogin,
		isError: isErrorLogin,
	} = useMutation({
		mutationFn: loginService,
		onSuccess: token => {
			if (token != null) {
				setTokenService(tokenZergexKey, token);
				router.navigate('/portfolio');
				queryClient.invalidateQueries({ queryKey: ['user'] });
			}
		},
		onError: error => {
			console.log(error);
		},
	});

	const {
		mutate: registerMutate,
		isPending: isLoadingRegister,
		isError: isErrorRegister,
	} = useMutation({
		mutationFn: registerService,
		onSuccess: () => {
			router.navigate('/');
		},
		onError: error => {
			console.log(error);
		},
	});

	const login = (dto: Login) => {
		loginMutate(dto);
	};

	const register = (dto: CreateUserDTO) => {
		registerMutate(dto);
	};

	const logout = () => {
		removeTokenService(tokenZergexKey);
		router.navigate('/');
	};

	return {
		user,
		isLoadingProfile,
		isErrorProfile,
		login,
		logout,
		isLoadingLogin,
		isErrorLogin,
		register,
		isLoadingRegister,
		isErrorRegister,
	};
}
