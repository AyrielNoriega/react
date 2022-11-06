import { useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'Gragon ball']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'nueva']);
        // setCategories( cat => [ ...cat, 'Nueva']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <button onClick={ onAddCategory }>Agregar!</button>
        <ol>
            { categories.map( category => {
                return <li key={category}>{ category }</li>
            }) }
        </ol>
    </>
  )
}
