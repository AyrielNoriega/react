
import { useFechGifs } from "../hooks/useFechGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFechGifs( category );

    return (
        <>
            <h5>{ category}</h5>
            <div className="card-grid">
                {
                    images.map( (image) => {
                        return <GifItem
                                    key={image.id}
                                    { ...image } //esparcir las propiedades, SE UTILIZA CUANDO SE TIENEN MUCHAS propiedades 
                                />
                    })
                }
            </div>
        </>
    )
}
