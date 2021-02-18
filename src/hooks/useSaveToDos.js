import { useEffect, useState } from "react";
import { saveAllToDos } from "../api/ToDoApi";

let useSaveToDos = (newArray) => {
    const [data, setData] = useState(newArray);
    useEffect(() => {
        // Define asynchronous function
        const fetchApi = async () => {
            let result = await saveAllToDos(data);
            setData(result);
        };

        // Call async function
        fetchApi();
    }, []);
    return data;
}

export default useSaveToDos;