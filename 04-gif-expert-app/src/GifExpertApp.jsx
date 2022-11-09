import { useState } from "react"
import { AppCategory } from "./components/AppCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'Gragon ball']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'nueva']);
        // setCategories( cat => [ ...cat, 'Nueva']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AppCategory
            setCategories={ setCategories }
        />

        {/* <button onClick={ onAddCategory }>Agregar!</button> */}
        <ol>
            { categories.map( category => {
                return <li key={category}>{ category }</li>
            }) }
        </ol>
    </>
  )
}
