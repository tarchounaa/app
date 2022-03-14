import { Select, TextField } from '@mui/material'
import React from 'react'
import './categoriesHeader.css'
const CategoriesHeader = ({ setValue }: { setValue: React.Dispatch<React.SetStateAction<string>> }): JSX.Element => {
    return (
        <div className='categories-header'>
            <div className='categories-header-search'>
                <TextField onChange={(e) => setValue(e.target.value)} fullWidth className="inputRounded" placeholder='Rechercher une catégorie' />
            </div>
            <div className='categories-header-dropdown'>
                <Select fullWidth ></Select>
            </div>
        </div>
    )
}

export default CategoriesHeader