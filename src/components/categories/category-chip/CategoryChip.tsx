import { Chip } from '@mui/material'
import React from 'react'
import { ICategory } from '../../../models/categories/category-model'
import { getColor } from '../../../utilities/categoriesColors';

const CategoryChip = (category: ICategory): JSX.Element => {

    const styleChip = {
        backgroundColor: getColor(category, 0),
        color: getColor(category, 1),
    };

    return (
        <Chip
            style={styleChip}
            size='small'
            label={category.group?.name} />)
}

export default CategoryChip