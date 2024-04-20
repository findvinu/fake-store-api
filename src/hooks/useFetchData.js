import { useEffect, useState } from "react";
import { fetchData } from "../util/fetchApi";

const useFetchData = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            setIsLoading(true);
            try{
                const response = await fetchData(url);
                setData(response);
            } catch(error){
                setError(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchDataFromApi();
    }, [url])

    return { data, isLoading, error};
}

export default useFetchData;    