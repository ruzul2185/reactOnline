

const Home = ({ data, print }) => {
    // data fetch from backend
    const message = "Properties are passed to Home";
    return(
        <div>
           {print(message)}
           {console.log(data)}
        </div>
    )
}

export default Home;