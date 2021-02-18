import { useEffect, useState } from "react";
import { deleteToDo } from "../api/ToDoApi";

let useDeleteToDo = (id) => {
    console.log(id)
    const [data, setData] = useState([]);
    useEffect(() => {
        // Define asynchronous function
        const fetchApi = async () => {
            let result = await deleteToDo(id);
            console.log(result)
            setData(result);
        };

        // Call async function
        fetchApi();
    }, []);
    return data;
}

export default useDeleteToDo;