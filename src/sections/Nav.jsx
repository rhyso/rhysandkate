import React, { Component } from 'react';


export class Nav extends Component {
    render() {
        return (

            <div className="nav-container">


                <nav className="nav nav-1 transparent light">
                    <a href="index.html" className="logo">
                        <span>Kate & Rhys' Wedding</span>
                    </a>
                    <ul className="menu">
                        <li><a href="#home" className="inner-link" target="default">home</a></li>
                        <li><a href="#kateandrhys" className="inner-link" target="default">K&R</a></li>
                        <li><a href="#info" className="inner-link" target="default">Guest Info</a></li>
                        <li><a href="#accomm" className="inner-link" target="default">accommodation</a></li>
                        <li><a href="#rsvp" className="inner-link" target="default">RSVP</a></li>
                        <li><a href="#contact" className="inner-link" target="default">contact</a></li>

                    </ul>
                    <div className="mobile-toggle">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                </nav>

            </div>

        )
    }
}
