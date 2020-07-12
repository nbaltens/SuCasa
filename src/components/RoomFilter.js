import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';


//Get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter( {rooms} ) {
    const context = useContext(RoomContext);
    const {
        handleChange,location,capacity,price,minPrice,maxPrice,pool,pets
    } = context;

    // set location to match which states are availible to go to
    //get unique types
    let types = getUnique(rooms,'location');
    //add all
    types = ['all',...types];
    //map to jsx
    types = types.map( (item,index) => {
        return (
        <option value={item} key={index}>{item}</option>
        );
        });
        //set capacity of of house to number on house from data
        let people = getUnique(rooms, 'capacity');
        people = people.map( (item, index) => {
            return (
                <option key={index} value={item}>{item}</option>
            )
        })

    return (
        <section className="filter-container">
            <Title title="search rentals" />
            <form className="filter-form">
                {/* location type */}
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select name="location" id="location" value={location} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                {/* end of location location */}

                {/* guest type */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
                {/* end of guest type */}

                {/* Price Range */}

                <div className="form-group slider">
                    <label htmlFor="price">
                        Rental price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>

                {/* End of price range */}

                {/* Extras */}

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="pool" id="pool" checked={pool} onChange={handleChange} />
                        <label htmlFor="pool">pool</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>

                </div>

                {/* End of Extras */}

            </form>
        </section>
    )
}
