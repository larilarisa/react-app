import { useEffect, useState } from "react";
import { getAllToDos } from "../api/ToDoApi";

let useGetToDos = (userMail) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Define asynchronous function
        const fetchApi = async () => {
            let result = await getAllToDos(userMail);
            console.log(result, 'result')
            setData(result);
        };

        // Call async function
        fetchApi();
    }, []);
    return [data, setData];
}

export default useGetToDos;