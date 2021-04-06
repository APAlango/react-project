import {useState, useEffect} from 'react';
import axios from 'axios';

const TravelerCards = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);//Should be initialized with true if travelers are fetched
    const [travelers, setTravelers] = useState([]);
    // Didn't have time but wanted to fetch randomly generated people's data to display as travels on the homepage join us section
    // useEffect(() => {
    //     // setTravelers(getAllTravelers());
    //     setIsLoaded(true);
    // });

    // function getAllTravelers() {
    //     const result = [];
    //     axios.get("https://randomuser.me/api/")
    //         .then((r) => {
    //             result.push({
    //                 name: r.data.results[0].name.first,
    //                 country: r.data.results[0].location.country
    //             });
    //         })
    //         .catch(rejection => {
    //             setError(rejection);
    //             console.error('Error in useEffect:', rejection);
    //         });
    //     return result;
    // }

    if (error) {
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
        return <div>Loading..</div>;
    } else {
        return (
            <div className="travelers">
                <div>Completed useEffect</div>
                {travelers.map(t => (
                    <div>{t}</div>
                ))}
            </div>
        );
    }
}

export default TravelerCards;
