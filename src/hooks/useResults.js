import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (term) => {
        try {
            await setErrorMsg('');
            const response = await yelp.get('/businesses/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose',
                }
            });
            setResults(response.data.businesses);
        }
        catch(err) {
            console.log(err);
            setErrorMsg('Something went wrong! Try again later.')
        }
    };

    return [searchApi, results, errorMsg];
}