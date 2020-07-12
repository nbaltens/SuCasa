import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="No place like Home" subtitle="Destinations starting at $200">
            <Link to="/rooms" className="btn-primary">
                Explore Homes
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
        
    );
}

export default Home;