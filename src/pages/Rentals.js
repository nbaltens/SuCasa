import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RentalsContainer from '../components/RentalContainer';
const Rentals = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Find Your Home">
            </Banner>
        </Hero>
        <RentalsContainer />
        </>
    )
}

export default Rentals;