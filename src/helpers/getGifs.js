export const getGif = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=W5SNvYQXtFEFvcdD56jPozFFxV0APY7C&q=${category}&limit=20`

    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}