

const getImage = async () => {
    const apiKey = '0sF7hLaDGQ5Wq917TWPHHOjYAdcNhyA9';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const data = await resp.json();
    return data;
}

getImage()
    .then( ({data}) => {
        console.log(data.images.original.url);
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img )
    }).then(console.log)
    .catch( console.warn );
