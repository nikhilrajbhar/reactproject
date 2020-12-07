import React from 'react';
import image from './clg.jfif'; 
import './Home.css';

const Home = () => {
    return (
        <div class="city">

            <h2>College Hunt</h2>
            <p>Top Colleges</p>
            <img src={image} alt="Logo" widht="300px" height="400" />;
        </div>

    );
};

export default Home;