import React, { Component } from 'react';
import items from './data';
const RentalContext = React.createContext();

export default class RentalProvider extends Component {
    state = {
        rentals: [],
        sortedRentals: [],
        featuredRentals: [],
        loading: true,
        location: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        pool: false,
        pets: false
    };
    //getData 

    componentDidMount() {
        let rentals = this.formatData(items);
        let featuredRentals = rentals.filter(rental => rental.featured === true);
        let maxPrice = Math.max(...rentals.map(item => item.price))
        let maxSize = Math.max(...rentals.map(item => item.size))


        this.setState( {
            rentals,
            featuredRentals,
            sortedRentals:rentals,
            loading:false,
            price: maxPrice,
            maxPrice,
            maxSize

        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.url);

            let rental = {...item.fields,images,id};
            return rental;
        });
        return tempItems;
    }
    getRental = (slug) => {
        let tempRentals = [...this.state.rentals];
        const rental = tempRentals.find(rental =>rental.slug === slug);
        return rental;
    };

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked:target.value
        const name = event.target.name;
        this.setState( {
            [name] : value
        }, this.filterRentals)
        
    };

    filterRentals = () => {
        let {rentals, location, capacity, price, pool, pets} = this.state;
        //all homes
        let activeHome = [...rentals];

        //transform what is needed to be integers
        capacity = parseInt(capacity);
        price = parseInt(price);


        //filter home by location
        if(location !== "all") {
            activeHome = activeHome.filter(rental => rental.location === location);
        }

        //filter home by capacity
        if(capacity !== 1) {
            activeHome = activeHome.filter(rental => rental.capacity >= capacity);
        }

        //filter home by price
        activeHome = activeHome.filter(rental => rental.price <= price);

        //Filter by pool
        if(pool) {
            activeHome = activeHome.filter(rental => rental.pool === true);
        }

        //Filter by pets
        if(pets) {
            activeHome = activeHome.filter(rental => rental.pets === true);
        }

        //Set State
        this.setState( {
            sortedRentals: activeHome
        });
    }



    render() {
        return (
            <RentalContext.Provider value={{...this.state, getRental: this.getRental, handleChange: this.handleChange}}>
                {this.props.children}
            </RentalContext.Provider>
        )
    }
}

//rentalconsumer can be changed
const RentalConsumer = RentalContext.Consumer;

// DELETE this with cooms container and switch

export function withRentalConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
        <RentalConsumer>
            {value => <Component {...props} context={value} />}
        </RentalConsumer>
        );
    };
}

//emd of delete

export{ RentalProvider, RentalConsumer, RentalContext };