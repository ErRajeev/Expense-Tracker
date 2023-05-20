import React from "react";
import img1 from '../../images/home_page_image1.jpg';
import img2 from '../../images/home_page_image2.jpg';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home__main">
                <div className="home__img">
                    <img src={img1} alt="home__page__image" />
                    <img src={img2} alt="h" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;   