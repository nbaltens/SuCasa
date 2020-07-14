import React, { Component } from 'react';
import {RentalContext} from '../context';
import Loading from './Loading';
import Rental from './Rental';
import Title from './Title';

export default class extends Component {
    static contextType = RentalContext
    render() {
        let {loading, featuredRentals : rentals} = this.context;
        rentals = rentals.map(rental => {
            return <Rental key={rental.id} rental={rental} />
        })
        return (
            <section className="featured-rooms">
                <Title title="featured Homes" />
                <div className ="featured-rooms-center">
                    {loading ? <Loading /> :rentals}
                </div>
            </section>
        )
    }
}
