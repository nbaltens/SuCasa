import React from 'react';
import RentalFilter from './RentalFilter';
import RentalList from './RentalList';
import { withRentalConsumer } from '../context';
import Loading from './Loading';

function RentalContainer({context}) {
    const {loading,sortedRentals,rentals} = context;
            if(loading) {
                return <Loading />;
            }
            return (
                <>
                    <RentalFilter rentals={rentals} />
                    <RentalList rentals={sortedRentals} />
                </>
            );
}
export default withRentalConsumer(RentalContainer)
