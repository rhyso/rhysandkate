import React, { Component } from 'react';
import './App.css';
import { Nav } from './sections/Nav.jsx';
import { Header } from './sections/Header.jsx';
import { Story } from './sections/Story.jsx';
import { Info } from './sections/Info.jsx';
import { Update } from './sections/Update.jsx';

import { Accom } from './sections/Accom.jsx';
import RSVP from './sections/rsvp.jsx';
import { Footer } from './sections/Footer.jsx';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="main-container">

                    <Header />
                    
                    <a id="kateandrhys" className="in-page-link"></a>

                    <Story />

                    <a id="info" className="in-page-link"/>

                    <Info />
                    <a id="accomm" className="in-page-link"/>

                    <Accom />
                    <a id="rsvp" className="in-page-link"/>
                    <RSVP />


                   <Footer />
                    <a id="contact" className="in-page-link"/>

                </div>

            </div>







        );
    }
}

export default App;
