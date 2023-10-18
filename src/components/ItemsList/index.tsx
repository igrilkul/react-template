import { uid } from 'react-uid';
import { Button } from '../Base/Button';

interface IItemsList {
  items: string[];
}
const ItemsList = ({ items }: IItemsList) => (
  <div className="items">
    {items.map((item, index) => (
      <div key={uid(item, index)}>
        <Button primary>{item}</Button>
      </div>
    ))}
  </div>
);

export default ItemsList;
