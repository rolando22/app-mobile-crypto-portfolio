import { router } from 'expo-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	createPortfolioItemService,
	deletePortfolioItemService,
	getPortfolioItemService,
	getPortfolioService,
	updatePortfolioItemService,
} from '../services';
import {
	CreatePortfolioItemDTO,
	PortfolioItem,
	UpdatePortfolioItemDTO,
} from '../types/portfolio';

export function usePortfolio(id: number = 0) {
	const queryClient = useQueryClient();
	const {
		data: portfolio,
		isLoading: isLoadingPorfolio,
		isError: isErrorPorfolio,
	} = useQuery<PortfolioItem[] | null>({
		queryKey: ['portfolio'],
		queryFn: getPortfolioService,
	});

	const { data: item } = useQuery<PortfolioItem | null>({
		queryKey: ['item'],
		queryFn: async () => (id === 0 ? null : getPortfolioItemService(id)),
	});

	const {
		mutate: addMutate,
		isPending: isLoadingAdd,
		isError: isErrorAdd,
	} = useMutation({
		mutationFn: createPortfolioItemService,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['portfolio'] });
			router.navigate('/portfolio');
		},
	});

	const {
		mutate: editMutate,
		isPending: isLoadingEdit,
		isError: isErrorEdit,
	} = useMutation({
		mutationFn: updatePortfolioItemService,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['portfolio'] });
			router.navigate('/portfolio');
		},
	});

	const {
		mutate: deleteMutate,
		isPending: isLoadingDelete,
		isError: isErrorDelete,
	} = useMutation({
		mutationFn: deletePortfolioItemService,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['portfolio'] });
		},
	});

	const addItem = (dto: CreatePortfolioItemDTO) => {
		addMutate(dto);
	};

	const editItem = (id: PortfolioItem['id'], dto: UpdatePortfolioItemDTO) => {
		editMutate({ id, dto });
	};

	const deleteItem = (id: PortfolioItem['id']) => {
		deleteMutate(id);
	};

	return {
		portfolio,
		isLoadingPorfolio,
		isErrorPorfolio,
		addItem,
		isLoadingAdd,
		isErrorAdd,
		item,
		editItem,
		isLoadingEdit,
		isErrorEdit,
		deleteItem,
		isLoadingDelete,
		isErrorDelete,
	};
}
