import { Button } from '@mui/material'
import React from 'react'


const CategoryDisplayMethodButton = ({ setSwitcher, switcher }: { setSwitcher: React.Dispatch<React.SetStateAction<boolean>>, switcher: boolean }): JSX.Element => {
    return (
        <div>
            <Button onClick={() => setSwitcher(!switcher)} variant={switcher ? 'contained' : 'text'}>Groupe de catégorie</Button>
            <Button onClick={() => setSwitcher(!switcher)} variant={!switcher ? 'contained' : 'text'}>Ordre alphabéthique</Button>
        </div>
    )
}

export default CategoryDisplayMethodButton