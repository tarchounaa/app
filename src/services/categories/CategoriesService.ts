import axios from 'axios';
import { ICategory, IVisibleResponse } from '../../models/categories/category-model';
import config from './../../config/project-config.json';

export const getAllCategories = (): Promise<ICategory[]> => {
    return axios.get(config.url.allCategories).then((result) => result.data);
}

export const getVisibleCategories = (): Promise<IVisibleResponse[]> => {
    return axios.get(config.url.visible).then((result) => result.data);
}