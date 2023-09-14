import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
    const defaultValue = []
    // Store list of all users
    const [users, setUsers] = useState(defaultValue);
    // Function to collect data
    const getApiData = async () => {
        // const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        // .then(
        //     (response) => response.json()
        // );
        await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
      .then(res => {
        const todos = res.data;
        setUsers(todos);
      })
    
        // update the state
        //setUsers(response);
    };
    useEffect(() => {
        getApiData();
      }, []);
    return(
        <>
        <h1>Home page</h1>
        <div>
        {/* {JSON.stringify(users)} */}
        <div className="items">
            {users.map((user) => (
                <>
                <h1>{user.id}</h1>
                <h1>{user.title}</h1>
                </>
            ))}
        </div>
        </div>
        </>
    );
}
export default Home;