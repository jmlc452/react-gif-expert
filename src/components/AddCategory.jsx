import { useState } from "react"





export default function AddCategory({onAddCategory}) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return

        // setCategories(categories => [inputValue, ...categories])
        onAddCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value = { inputValue }
            onChange={onInputChange}
        />
        
    </form>
  )
}
