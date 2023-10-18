import { ItemType } from '../../enums/ItemType.enum';

export interface IGetItemResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  type: ItemType;
  fullText: string;
}
