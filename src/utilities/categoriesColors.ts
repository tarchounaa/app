import { ICategory } from '../models/categories/category-model';

const CONFIG_CHIP_COLORS = [['#e3feff', '#2596be'], ['#ffece5', '#eb9e91'], ['#f4ffc9', '#616600'], ['#fff6bf', '#e5b24b'], ['#ecd4ff', '#4a0085']];
const DEFAULT_CONFIG_CHIP_COLORS = ['#ffd9e8', '#630028'];

export const getColor = (category: ICategory, e: number) => (category.group && category.group?.id <= CONFIG_CHIP_COLORS.length) ? CONFIG_CHIP_COLORS[category.group.id - 1][e] : DEFAULT_CONFIG_CHIP_COLORS[e]