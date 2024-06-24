// src/components/ItemList.jsx
// get the items in the props
import "./CharacterList.css"

const CharacterList = ({items}) => {
    return (
      <div className="listing">
        {/* replace filteredUsers with items*/}
        {items.length === 0
          ? <p>No character found</p>
          : <ul>
            {items.map(item => <li key={item.id}>{item.name} <img src={item.image} /></li>)}
          </ul>
        }
      </div>
    )
  }
  
  export default CharacterList