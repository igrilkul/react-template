import { RootState } from '../store';
import { initialStateItemsStore } from './slices/items/slice';

export const initialState: RootState = {
  itemsStore: initialStateItemsStore
};
