import React from 'react'
import CategoryCard from '../../../components/categories/category-card/CategoryCard'
import useCategories from './useCategories'
import './categoriesMain.css'
import { ICategory } from '../../../models/categories/category-model'
import { getColor } from '../../../utilities/categoriesColors'

const CategoriesMain = ({ switcher, searchFieldValue }: { switcher: boolean, searchFieldValue: string }) => {

    const [categoriesToShow] = useCategories(searchFieldValue);

    const groupBy = (xs: any, f: any) => {
        // eslint-disable-next-line no-sequences
        return xs.reduce((r: any, v: any, i: any, a: any, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
    }

    const categoriesToShowGrouped = Object.entries(groupBy(categoriesToShow, (c: any) => c.group.id));

    const styleDivider = (category: ICategory) => {
        return ({
            backgroundColor: getColor(category, 0),
            color: getColor(category, 1),
            height: '27px',
            width: '100%',
            display: 'flex',
        })
    };

    return (
        <div className='categories-main-container'>
            {
                switcher ?
                    <div className='categories-main-container'>
                        {categoriesToShowGrouped.map(e => {
                            return (
                                <div className='categories-main-container'>
                                    <div style={styleDivider((e[1] as ICategory[])[0])}>{(e[1] as ICategory[])[0].group?.name}</div>
                                    {(e[1] as ICategory[]).map(ee =>
                                        <div className='categories-card-50' key={ee.id}>
                                            <CategoryCard category={ee} showChip={false}
                                            />
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    :
                    categoriesToShow.map(e =>
                        <div className='categories-card-50' key={e.id}>
                            <CategoryCard category={e} showChip={true}
                            />
                        </div>)
            }
        </div>
    )
}

export default CategoriesMain