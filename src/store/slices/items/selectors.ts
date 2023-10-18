import { AppStoreState } from '../../../store';

export const selectItemsState = (state: AppStoreState) => state.itemsStore.items;
