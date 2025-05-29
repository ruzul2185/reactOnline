import Style from './Home.module.css';

const Home = ({ data, print }) => {
    // data fetch from backend
    const message = "Properties are passed to Home";
    return(
        <div>
           <div className={Style.header}>
                {data}
           </div>
        </div>
    )
}

export default Home;