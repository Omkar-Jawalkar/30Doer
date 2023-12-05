import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setData(responseData);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, isLoading, refetch: fetchData };
};

export default useFetch;
