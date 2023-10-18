import { useEffect } from 'react';
import ItemsList from '../../components/ItemsList';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchItems, selectItemsState } from '../../store/slices/items';

const Items = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItemsState);

  const itemTitles = items?.map((item) => item.title) ?? [];

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="items">
      <div className="items__heading">Items page</div>

      <ItemsList items={itemTitles} />
    </div>
  );
};

export default Items;
