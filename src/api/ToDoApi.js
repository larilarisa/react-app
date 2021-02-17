import React from 'react'

const dataJSON = [
  { id: 10, name: "Practice English", done: false },
  { id: 11, name: "Water the flowers", done: true }
]

 let getAllToDos = async () => {
  let result = new Promise((resolve, reject) => {
    resolve(dataJSON);
  });
  return result;
}




// async function getAllToDos() {

//         try {
//           const resp = await fetch(dataJSON);
//           console.log(resp);
//           return resp;
//         } catch (err) {
//           console.log(err)
//         }
//     }

// post
//delete
// update

 export default getAllToDos;
