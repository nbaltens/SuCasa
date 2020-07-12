import React, { Component } from 'react';
import Title from './Title';
import {FaStar, FaUserClock, FaShuttleVan, FaBroom} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
            icon: <FaStar/>,
            title: "Rewards Program",
            info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
            icon: <FaUserClock/>,
            title: "24/7 Support",
            info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
            icon: <FaBroom/>,
            title: "maid services",
            info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item) => {
                        return<article className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    } )}
                </div>
                
            </section>
        );
    }
}

