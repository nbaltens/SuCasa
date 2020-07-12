import React, { Component } from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaEnvelope} from 'react-icons/fa';


export default class Navbar extends Component {
    state = {
        social: [
            {
            icon: <FaFacebookF/>
            },
            {
            icon: <FaYoutube/>
            },
            {
            icon: <FaInstagram/>
            },
            {
            icon: <FaTwitter/>
            }
        ]
    }

    
    render() {
        return (
<div className="foot">

    <div class="left-side-foot">
        <h2><span className="footer-name-color">Su</span>Casa</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam suscipit natus a quisquam cumque incidunt nesciunt! Ut, dolore corporis!</p>
        
        <div className="social-outside">
            {this.state.social.map( (item) => {
                return(
                    <div className="social-container">
                        <span className="social-icons">{item.icon}</span>
                    </div>
                      )
                })}
            </div>
        </div>

        <div className="footer-middle">
            <ul>
            <h3>Quick Links</h3>
                <a href="#"><li>Extras</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>Community Center</li></a>
                <a href="#"><li>Resource Center</li></a>
                <a href="#"><li>Help Center</li></a>
                <a href="#"><li>Cancellation Options</li></a>
            </ul>
        </div>

        <div className="footer-right">
            <h3>Contact Us</h3>
            <form>
                <input type="email" placeholder="Your email address"></input>
                <textarea placeholder="Message..."></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
</div>
        )
    }
}
