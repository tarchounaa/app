import { Card, CardContent } from '@mui/material'
import React from 'react'
import { ICategory } from '../../../models/categories/category-model'
import CategoryChip from '../category-chip/CategoryChip'
import './categoryCard.css'

const CategoryCard = ({ category, showChip }: { category: ICategory, showChip: boolean }): JSX.Element => {

    const cardStyle = {
        height: showChip ? '7em' : '5em',
        borderRadius: 0
    }

    return (
        <Card style={cardStyle} variant="outlined">
            <CardContent>
                <div className='category-card-content-container'>
                    {showChip && <CategoryChip {...category} />}
                    <label>{category.wording}</label>
                    <span>{category.description}</span>
                </div>
            </CardContent>
        </Card>)
}

export default CategoryCard