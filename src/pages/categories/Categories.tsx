import React, { useState } from 'react'
import CategoriesFooter from './categories-footer/CategoriesFooter'
import CategoriesHeader from './categories-header/CategoriesHeader'
import CategoriesMain from './categories-main/CategoriesMain'
import './categories.css'
const Categories = ({ switcher }: { switcher: boolean }) => {
    const [searchFieldValue, setSearchFieldValue] = useState<string>('');
    return (
        <div className='categories-container'>
            <CategoriesHeader setValue={setSearchFieldValue} />
            <CategoriesMain switcher={switcher} searchFieldValue={searchFieldValue} />
            <CategoriesFooter />
        </div>
    )
}

export default Categories