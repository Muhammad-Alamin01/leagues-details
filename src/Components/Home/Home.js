import './home.css'
import React, { useEffect, useState } from 'react';
import AllLeaugeDisplayShow from '../AllLeaugeDisplayShow/AllLeaugeDisplayShow';

const Home = () => {
    const [leauges, setLeauges] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const dataSlice = data.leagues.slice(0, 16);
                setLeauges(dataSlice)
            })
            .catch((error) => console.error(error))
    }, [])
    return (
        <div id="home-component">
            <h1 className="text-center text-primary">European Leagues</h1>
            {
                leauges.map(leauge => <AllLeaugeDisplayShow key={leauge.idLeague} leauge={leauge} />)
            }
        </div>
    );
};

export default Home;