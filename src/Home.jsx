import Style from './Home.module.css';
import { useEffect, useState } from 'react';

const Home = ({ data }) => {
    // data fetch from backend
    const [showData, setShowData] = useState([]);

    useEffect(() => {

        getData();
        
    },[])

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await data.json();
        setShowData(result);
        console.log(result);
    }


    return(
        <div>
           {showData.length>0 && showData.map((item) => {
            return <div key={item.id}>
                        {item.title}
                    </div>
           })}
        </div>
    )
}

export default Home;