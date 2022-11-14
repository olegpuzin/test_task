import {useState, useEffect} from 'react';
import axios from 'axios';

export const useFetch = (url, options = { headers: { 'Accept': 'application/json' } }) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        (async() => {
            setLoading(true);
            setData(null);
            setError(null);
    
            axios.get(url, options)
            .then(res => {
                setLoading(false);
                res && setData(res);
            })
            .catch(err => {
                setLoading(false);
                setError('An error occurred while processing your request');
                console.log(err);
            })
        })()

    }, [url])

    return {loading, data, error}
}