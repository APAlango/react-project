import {useState, useEffect} from 'react';
import axios from 'axios';

const TravelerCards = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);//Kui ]nnestub fetchida travelerid ss peaks initial value false olema
    const [travelers, setTravelers] = useState([]);

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
