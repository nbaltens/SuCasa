import React from 'react';
import Rental from './Rental';

export default function RentalsList( {rentals} ) {

    if(rentals.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no homes matched your search</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rentals.map(item => {
                        return <Rental key={item.id} rental={item} />
                    })
                }
            </div>
        </section>
    )
}
