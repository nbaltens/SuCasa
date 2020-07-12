import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export const Error = () => {
    return (
        <Hero>
            <Banner title="error" subtitle="Page not found">
            <Link to="/" className="btn-primary">
                return Home
            </Link>
                
            </Banner>
        </Hero>
    )
}

export default Error;