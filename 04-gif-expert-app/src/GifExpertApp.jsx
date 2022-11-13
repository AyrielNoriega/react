import { useState } from "react"
import { AppCategory } from "./components/AppCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory,...categories]);
        // setCategories( cat => [ ...cat, 'Nueva']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AppCategory
            // setCategories={ setCategories }
            onNewCategory={ event => onAddCategory(event) }
        />

        {/* <button onClick={ onAddCategory }>Agregar!</button> */}
        {
            categories.map( category => (
                <GifGrid
                    key={ category }
                    category={ category }
                />
            ))
        }
    </>
  )
}
