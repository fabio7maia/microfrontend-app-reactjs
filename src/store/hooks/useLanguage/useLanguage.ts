import { useSelector } from 'react-redux';
import { StoreState } from '../..';

export const useLanguage = (): string => {
	return useSelector((state: StoreState) => state.baseState.language);
};
