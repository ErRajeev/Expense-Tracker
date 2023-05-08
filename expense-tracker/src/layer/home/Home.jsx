import React from "react";
import img1 from  '../../images/home_page_image.jpg'
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return (
        <>
        <Navbar/>
            <div>
                <img src={img1} alt="f"/>
            </div>
            <h1>This is Home</h1>
        </>
    )
}
export default Home;   