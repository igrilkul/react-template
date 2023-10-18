import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems } from '../../../api/items';
import { IItemsState, initialStateItemsStore } from './slice';

export const fetchItems = createAsyncThunk('items/fetchItemsAction', async () => {
  const { payload: fetchedItems } = await getItems();
  return fetchedItems;
});

export const resetItems = (state: IItemsState) => {
  state.items = initialStateItemsStore.items;
};
