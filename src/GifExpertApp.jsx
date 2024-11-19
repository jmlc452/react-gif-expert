import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/gifGrid";



export const GifExpertApp = () => {


    const [categories, setCategories] = useState(["Code"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp </h1>

            <AddCategory
                onAddCategory={onAddCategory}

            />

            {categories.map(
                category => {
                    return (
                        <GifGrid key={category} category={category} />
                    )
                }
            )}
        </>
    )
}