import {
  Action, ThunkAction, combineReducers, configureStore
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { itemsReducer as items } from './store/slices/items/slice';

export const store = configureStore({
  reducer: { itemsStore: items },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const rootReducer = combineReducers({
  itemsStore: items
});

export type AppStoreState = ReturnType<typeof rootReducer>; // TODO: Use persistReducer instead of configureStore if persistence is needed

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStoreState> = useSelector;
