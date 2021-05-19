import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <section className="banner-area">
            <div className="search-fild">
                <h1>best food watting for your belly</h1>
                <input type="text" placeholder="search your food items" name="search" id=""/>
                <button>search</button>
            </div>
        </section>
    );
};

export default Banner;