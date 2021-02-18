import React from 'react'

const localStorageKey = "myToDos";

const dataJSON = [
  { id: 10, name: "Practice English", done: false },
  { id: 11, name: "Water the flowers", done: true }
]

export let getAllToDos = async () => {
  // saveAllToDos(dataJSON)
  let result = new Promise((resolve, reject) => {
    let toDoArray;
    let rawData = localStorage.getItem(localStorageKey);
    if (rawData) {
      try {
        toDoArray = JSON.parse(rawData);
      } catch (err) {
        console.error('Something went wrong');
      }
    } else {
      toDoArray = [];
    }
    resolve(toDoArray);
  });
  return result;
}

export let saveAllToDos = async (newToDoArray) => {
  let result = new Promise((resolve, reject) => {
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(newToDoArray));
      resolve(true);
    } catch (err) {
      console.error('Could not save to dos', err);
      reject(err);
    }
  });
  return result;
}

export let deleteToDo = async (itemId) => {
  let result = new Promise((resolve, reject) => {
    let toDoArray;
    let rawData = localStorage.getItem(localStorageKey);
    if (rawData && itemId) {
      try {
        toDoArray = JSON.parse(rawData);
        const foundIndex = toDoArray.findIndex(v => v.id === itemId);
        toDoArray.splice(foundIndex, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(toDoArray));
        resolve(true);

      } catch (err) {
        console.error('Something went wrong');
      }
    } else {
      toDoArray = [];
    }
    resolve(toDoArray);
  });
  return result;
}

export let updateToDo = async (editedItemValue) => {
  let result = new Promise((resolve, reject) => {
    if (editedItemValue && editedItemValue.length > 0) {
      try {

        localStorage.setItem(localStorageKey, JSON.stringify(editedItemValue));
        resolve(true);

      } catch (err) {
        console.error('Something went wrong');
      }
    } 
  });
  return result;
}

// export default getAllToDos;
