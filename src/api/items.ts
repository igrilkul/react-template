import axiosInstance from '../axios';
import { IGetItemResponse } from '../interfaces/DTOs/IGetItemResponse.interface';

export const getItems = () => axiosInstance.get<IGetItemResponse[]>('/item');
