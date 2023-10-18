import { IGetItemResponse } from '../DTOs/IGetItemResponse.interface';

export interface IItem extends IGetItemResponse {
  characters?: []; // TODO: Joined characters
}
