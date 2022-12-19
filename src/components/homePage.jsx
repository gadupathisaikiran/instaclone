import Posts from "./posts";
import "../styles/homePage.css";
import { useState, useEffect } from "react";
import HomeTop from "./homeTop";

const HomePage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://instaclone-backend-wq4r.onrender.com").then((res) => res.json()).then((userData) => setData(userData)).catch((err) => console.log(err));
    }, []);

    return (
        <>
            <HomeTop />
            <div>
                {
                    data.map((ele, idx) => {
                        return <Posts data={ele} />
                    })
                }
            </div>
        </>
    )
}

export default HomePage;
