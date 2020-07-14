import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRentals from '../components/FeaturedRentals';

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="No place like Home" subtitle="Destinations starting at $200">
            <Link to="/rentals" className="btn-primary">
                Explore Homes
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRentals />
        </>
        
    );
}

export default Home;