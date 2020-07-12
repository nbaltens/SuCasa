import React, { Component } from 'react';
import items from './data';
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
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
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))


        this.setState( {
            rooms,
            featuredRooms,
            sortedRooms:rooms,
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

            let room = {...item.fields,images,id};
            return room;
        });
        return tempItems;
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room =>room.slug === slug);
        return room;
    };

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked:target.value
        const name = event.target.name;
        this.setState( {
            [name] : value
        }, this.filterRooms)
        
    };

    filterRooms = () => {
        let {rooms, location, capacity, price, pool, pets} = this.state;
        //all homes
        let activeHome = [...rooms];

        //transform what is needed to be integers
        capacity = parseInt(capacity);
        price = parseInt(price);


        //filter home by location
        if(location !== "all") {
            activeHome = activeHome.filter(room => room.location === location);
        }

        //filter home by capacity
        if(capacity !== 1) {
            activeHome = activeHome.filter(room => room.capacity >= capacity);
        }

        //filter home by price
        activeHome = activeHome.filter(room => room.price <= price);

        //Filter by pool
        if(pool) {
            activeHome = activeHome.filter(room => room.pool === true);
        }

        //Filter by pets
        if(pets) {
            activeHome = activeHome.filter(room => room.pets === true);
        }

        //Set State
        this.setState( {
            sortedRooms: activeHome
        });
    }



    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

//roomconsumer can be changed
const RoomConsumer = RoomContext.Consumer;

// DELETE this with cooms container and switch

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
        <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
        );
    };
}

//emd of delete

export{ RoomProvider, RoomConsumer, RoomContext };