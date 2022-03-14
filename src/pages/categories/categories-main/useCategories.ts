import { ICategory } from '../../../models/categories/category-model';
import { useState } from 'react';
import { getAllCategories, getVisibleCategories } from './../../../services/categories/CategoriesService';
import { useEffect } from 'react'

const useCategories = (searchFieldValue: string) => {

    const [categoriesToShow, setCategoriesToShow] = useState<ICategory[]>([]);

    useEffect(() => {
        getAllCategories().then(allCategories => {
            getVisibleCategories().then(visible => {
                const visibleCategories = allCategories.filter(c => visible.findIndex(v => v.id === c.id) > -1).filter(e => (e.wording + e.description + e.group?.name).toLocaleLowerCase().includes(searchFieldValue.toLocaleLowerCase()));
                setCategoriesToShow(visibleCategories);
            })
        })
    }, [searchFieldValue])

    return [categoriesToShow]
}

export default useCategories