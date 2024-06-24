import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
import "./HomePage.css"
export default function HomePage(){
    return(
        <div className="centerHome">
            <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="logo"/>
            <CharacterSearch />
        </div>
    )
}