import { getTokenService } from './token.service';
import { config } from '../config';
import {
	CreatePortfolioItemDTO,
	PortfolioItem,
	UpdatePortfolioItemDTO,
} from '../types/portfolio';

const { apiUrl, tokenZergexKey } = config;

export const getPortfolioService = async (): Promise<
	PortfolioItem[] | null
> => {
	const token = await getTokenService(tokenZergexKey);
	const response = await fetch(`${apiUrl}/api/v1/portfolio`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) return null;
	const { data } = await response.json();
	return data;
};

export const getPortfolioItemService = async (
	id: PortfolioItem['id'],
): Promise<PortfolioItem | null> => {
	const token = await getTokenService(tokenZergexKey);
	const response = await fetch(`${apiUrl}/api/v1/portfolio/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) return null;
	const { data } = await response.json();
	return data;
};

export const createPortfolioItemService = async (
	dto: CreatePortfolioItemDTO,
) => {
	const token = await getTokenService(tokenZergexKey);
	const response = await fetch(`${apiUrl}/api/v1/portfolio`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(dto),
	});
	if (!response.ok) return null;
	const data = await response.json();
	return data;
};

export const updatePortfolioItemService = async ({
	id,
	dto,
}: {
	id: PortfolioItem['id'];
	dto: UpdatePortfolioItemDTO;
}): Promise<PortfolioItem | null> => {
	const token = await getTokenService(tokenZergexKey);
	const response = await fetch(`${apiUrl}/api/v1/portfolio/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(dto),
	});
	if (!response.ok) return null;
	const data = await response.json();
	return data;
};

export const deletePortfolioItemService = async (id: PortfolioItem['id']) => {
	const token = await getTokenService(tokenZergexKey);
	const response = await fetch(`${apiUrl}/api/v1/portfolio/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!response.ok) return null;
	const data = await response.json();
	return data;
};
