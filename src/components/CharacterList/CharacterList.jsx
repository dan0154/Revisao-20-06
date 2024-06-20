// src/components/ItemList.jsx
// get the items in the props
const CharacterList = ({items}) => {
    return (
      <>
        {/* replace filteredUsers with items*/}
        {items.length === 0
          ? <p>No users found</p>
          : <ul>
            {items.map(item => <li key={item.id}>{item.firstName}</li>)}
          </ul>
        }
      </>
    )
  }
  
  export default CharacterList