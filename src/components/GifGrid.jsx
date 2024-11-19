import { useEffect, useState } from "react"
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export default function GifGrid({ category }) {

    const {images, isLoading} = useFetchGifs(category)
    
    console.log(isLoading)
    
    return (
        <>
            <h1>{category}</h1>
            <div className="card-grid">
                {images.map((item)=>{
                    return(

                        <GifItem key={item.id} {...item}/>
                        
                    )
                })}
            </div>
        </>
    )
}
