import { useState, useEffect } from "react";
import CharacterList from "../CharacterList/CharacterList";
export default function CharacterSearch() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [apiUsers, setApiUsers] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])


    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                setApiUsers(data.users)
                setFilteredUsers(data.users)
            })
            .catch(err => {
                console.log(err)
                // update the error state
                setError(err)
            })
            .finally(() => {
                // wether we sucessfully get the users or not, 
                // we update the loading state
                setLoading(false)
            })
    }, [])


    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        // filter the items using the apiUsers state
        const filteredItems = apiUsers.filter((user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredUsers(filteredItems);
    }
    return (
        <div className="characterSearch">
            <label htmlFor="characterInput" >Personagem:</label>
            <input type="text" value={searchItem} onChange={handleInputChange} />
            {loading && <p>Loading...</p>}
            {error && <p>There was an error loading the users</p>}
            {!loading && !error && <CharacterList items={filteredUsers} />}
        </div>
    )
}