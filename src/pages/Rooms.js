import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomContainer';
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Find Your Home">
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
    )
}

export default Rooms;