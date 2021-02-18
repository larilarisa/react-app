import React, { Component, useEffect, useState } from 'react';
import getAllToDos, { saveAllToDos, updateToDo } from '../api/ToDoApi';
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

  // not used
  // const [itemsState, setItemsState] = useState({
  //   items: []
  // });
  let data = useGetToDos();
  console.log(data)

  const [showItems, setShowItems] = useState(true);

  const toggleItemsHandler = () => {
    const doesShow = showItems;
    setShowItems(!doesShow);

  }

  // not used --- replaced with updateToDo api
  // const nameChangedHandler = (event, id) => {

  //   if (data) {
  //     const itemIndex = data.findIndex(i => {
  //       return i.id === id;
  //     })
  //     const foundItem = {
  //       ...data[itemIndex]
  //     };

  //     foundItem.name = event.target.value;   
  //      console.log(foundItem, event.target.value)
  //     const items = [...data];
  //     items[itemIndex] = foundItem;

  //     setItemsState({ items: items });
  //    // console.log(items, itemsState)
  //   }
  // }

  let edditedItemsArray = props;

  const nameChangedHandler = (event, id) => {

    if (edditedItemsArray && edditedItemsArray.length > 0) {
      const itemIndex = edditedItemsArray.findIndex(i => i.id === id)
      // const foundItem = {
      //     ...edditedItemsArray[itemIndex]
      // };

      edditedItemsArray[itemIndex].name = event.target.value;
      console.log(edditedItemsArray)
      // console.log(foundItem, event.target.value)
      // const items = [...edditedItemsArray];
      // items[itemIndex] = foundItem;

      // setItemsState({ items: items });
      // console.log(items, itemsState)
    }
  }

  const saveUpdatedItems = () => {
    // TODO  use updateToDo
  }


  const showItemsContent = () => {
    if (showItems && data) {
      return (
        <div>
          <Items
            items={data}
            changed={nameChangedHandler} />
        </div>
      )
    }
  }

  const addNewToDoHandler = (newToDoValue) => {
    console.log(newToDoValue);
    if (newToDoValue.length > 0) {
      let toDoItems = [...data, { id: data.length + 1, name: newToDoValue, done: false }];
      saveAllToDos(toDoItems).then(() => {
        console.log('Succes!')
      });
    }
  }

  return (
    <div className="todoapp stack-large">
      <h1> My TO DO List</h1>
      <ToDo
        items={data}
        addNewToDoHandler={addNewToDoHandler}
        toggleItemsHandler={toggleItemsHandler}
      />
      {showItemsContent()}
      <button type="button" onClick={saveUpdatedItems}>Save changes</button>
    </div>
  );

}

export default App;