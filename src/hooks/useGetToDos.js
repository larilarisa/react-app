import { useEffect, useState } from "react";
import getAllToDos from "../api/ToDoApi";

let useGetToDos = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Define asynchronous function
        const fetchApi = async () => {
            let result = await getAllToDos();
           // console.log(result)
            setData(result);
        };

        // Call async function
        fetchApi();
    }, []);
    return data;
}

export default useGetToDos;