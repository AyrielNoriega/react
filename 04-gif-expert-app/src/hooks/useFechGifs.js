
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFechGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading,
    }
}

//un hook no es mas que una función que regresa algo.