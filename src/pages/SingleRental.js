import React, { Component } from 'react';
import defaultBcg from '../images/all-homes-heading-img.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RentalContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRental extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RentalContext;

    render() {
        const {getRental} = this.context;
        const rental = getRental(this.state.slug);
        if(!rental) {
            return ( 
                <div className="error">
                <h3>Home could not be found...</h3>
                <Link to='/rentals' className="btn-primary">
                    Back to rentals
                </Link>
            </div>
            );
        }
        const {name,description,capacity,price,extras,location,pets,images} = rental;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
            <StyledHero img ={mainImg || this.state.defaultBcg}>
                <Banner title={`${name}`}>
                    <Link to='/rentals' className="btn-primary">
                        Back to rentals
                    </Link>
                </Banner>
            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">    
                {defaultImg.map( (item,index) => {
                    return <img key={index} src={item} alt={name} />
                })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}/night</h6>
                        <h6>
                            capacity :{" "}
                            {capacity > 1 ? `${capacity} guests` : `${capacity} guest` }
                            </h6>
                            <h6>{pets ? "pets allowed":"no pets allowed"}</h6>
                            <h6>Location: {location}</h6>                            
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Amenities</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>-{item}</li>
                    })}
                </ul>

            </section>

            </>
        )
    }
}


