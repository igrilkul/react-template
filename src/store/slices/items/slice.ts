import { createSlice } from '@reduxjs/toolkit';
import { IItem } from '../../../interfaces/states/IItem.interface';
import { resetStoreActionMatcher } from '../../shared';
import {
  fetchItems as fetchItemsAction,
  resetItems as resetItemsAction
} from './actions';

export interface IItemsState {
  items: IItem[];
}

const initialState: IItemsState = {
  items: []
};

export { initialState as initialStateItemsStore };

export const { reducer: itemsReducer, actions: itemsActions } = createSlice({
  name: 'items',
  initialState,
  reducers: {
    resetItems: resetItemsAction
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItemsAction.fulfilled, (state, { payload: fetchedItems }) => {
      state.items = fetchedItems;
    });
    builder.addMatcher(resetStoreActionMatcher, () => initialState);
  }
});

export const { resetItems } = itemsActions;
