import React, { Component, useState } from 'react';
import getAllToDos from '../api/ToDoApi';
import Items from '../components/Items/Items';
import ToDo from '../components/ToDo/ToDo';
import useGetToDos from '../hooks/useGetToDos';
import './App.css'


// class App extends Component {
//   state = {items: [], showItems: true};
// state = {
//   items: [
//     { id: 10, name: "Practice English", done: false },
//     { id: 11, name: "Water the flowers", done: true }
//   ],
//   showItems: true
// };

// REACT HOOKS 
const App = props => {

  const [itemsState, setItemsState] = useState({
    items: []
  });
  const data = useGetToDos();
  console.log(data)
  setItemsState({
    items: data
  })

  // let getItems = async () => {
  //   try {
  //     let result = await getAllToDos();
  //     console.log(result)
  //     return result;
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const [showItems, setShowItems] = useState(true);

  const toggleItemsHandler = () => {
    const doesShow = showItems;
    setShowItems({ showItems: !doesShow });

  }

  const nameChangedHandler = (event, id) => {
    if (itemsState) {
      const itemIndex = itemsState.items.findIndex(i => {
        return i.id === id;
      })
      const foundItem = {
        ...itemsState.items[itemIndex]
      };

      foundItem.name = event.target.value;
      const items = [...itemsState.items];
      items[itemIndex] = foundItem;
      setItemsState({ items: items });
    }
  }

  const deleteItemHandler = (itemIndex) => {
    const items = [...itemsState.items];
    items.splice(itemIndex, 1)
    setItemsState({ items: items })
  }


  const showItemsContent = () => {
    console.log(itemsState)
    if (showItems && itemsState) {
      return (
        <div>
          <Items
            items={itemsState.items}
            clicked={deleteItemHandler}
            chenged={nameChangedHandler} />

        </div>
      )
    }
  }

  return (
    <div className="todoapp stack-large">
      {/* <h1 onClick={getItems}>My TO DO List</h1> */}
      <ToDo
        items={itemsState.items}
        toggleItemsHandler={toggleItemsHandler}
      />
      {showItemsContent()}
    </div>
  );

}

export default App;