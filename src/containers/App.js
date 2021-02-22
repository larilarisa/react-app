import React, { useState } from 'react';
import { addNewToDo, deleteToDo, saveAllToDos } from '../api/ToDoApi';
import ItemsList from '../components/ItemsList/ItemsList';
import NewToDoItem from '../components/NewToDoItem/NewToDoItem';
import useGetToDos from '../hooks/useGetToDos';
import './App.scss'

// REACT HOOKS 
const App = props => {

  // not used
  // const [itemsState, setItemsState] = useState({
  //   items: []
  // });
  const userMail = 'larisa.grosu@softvision.com'

  let [data, setData] = useGetToDos(userMail);

  const [showItems, setShowItems] = useState(true);

  const toggleItemsHandler = () => {
    const doesShow = showItems;
    setShowItems(!doesShow);
  }

  const nameChangedHandler = (newNameValue, id) => {
    console.log(data)
    if (data && data.length > 0) {
      const itemIndex = data.findIndex(i => i.id === id)
      const foundItem = {
        ...data[itemIndex]
      };
      console.log(foundItem, newNameValue)

      foundItem.name = newNameValue;
      // console.log(edditedItemsArray)

      const items = [...data];
      items[itemIndex] = foundItem;
      setData(items);

    }
  }

  const saveUpdatedItems = () => {
    console.log(data)
    // TODO  use updateToDo
  }

  const deleteItemHandler = (itemId) => {
    deleteToDo(itemId).then(() => {
      console.log('Item Deleted!');
      // setData(toDoItems);
    })
  };

  const showItemsContent = () => {
    if (showItems && data) {
      return (
        <div>
          <ItemsList
            items={data}
            changed={nameChangedHandler}
            click={deleteItemHandler} />
        </div>
      )
    } else return (<div><p id="list-heading">{data?.filter(ii => !(ii.done)).length} task(s) remaining</p></div>)
  }

  const addNewToDoHandler = (newToDoValue) => {
    if (newToDoValue.length > 0) {
      // let toDoItems = [...data, { name: newToDoValue, done: false, owner: userMail }];
      // saveAllToDos(toDoItems).then(() => {
      //   console.log('Item Added!')
      //   setData(toDoItems);
      // });
      let newToDo = { name: newToDoValue, done: false, owner: userMail };
      addNewToDo(newToDo, userMail).then((newArray) => {
        console.log('Succes');
        setData(newArray);
      })
    }
  }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>APPS</h1>
      <div className="apps">
        <div className="app1">
          <h1> My TO DO List</h1>
          <NewToDoItem
            items={data}
            addNewToDoHandler={addNewToDoHandler}
          />
          <button className="btn btn-link"
            onClick={() => toggleItemsHandler()}>Show/Hide Tasks</button>

          {showItemsContent()}

          <div className="save-btn-container">
            <button className="btn btn-primary" onClick={saveUpdatedItems}>Save changes</button>
          </div>
        </div>

      </div>
    </div>
  );

}

export default App;