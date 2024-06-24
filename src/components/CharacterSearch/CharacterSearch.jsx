import { useState, useEffect } from "react";
import CharacterList from "../CharacterList/CharacterList";
import "./CharacterSearch.css";


export default function CharacterSearch() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [apiCharacters, setApiCharacters] = useState([])
    const [searchItem, setSearchItem] = useState('')


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${searchItem}`)
            .then(response => response.json()) 
            .then(data => {
                setApiCharacters(data.results || [])
            })

            .catch(err => {
                console.log(err)
                setError(err)
            })

            .finally(() => {
                setLoading(false)
            })
    }, [searchItem])


    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    }

    return (
        <div className="characterSearch">
            <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Ex: Rick"/>
            {searchItem == '' && <p>Enter a Rick and Morty character to start</p>}
            {loading && <p>Loading...</p>}
            {error && <p>There was an error loading the users</p>}
            {!loading && !error && searchItem != '' && <CharacterList items={apiCharacters} />}
        </div>
    )
}