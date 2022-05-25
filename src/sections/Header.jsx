import React, { Component } from 'react';


export class Header extends Component {
    render() {
        return (

            <section className="header header-1 fullscreen overlay">
                <div className="background-image-holder">
                    <img alt="Background image" className="background-image" src="img/hero1.jpg" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>KATE &amp; RHYS<br/></h1>
                            <h6><del>June 20th, 2020 - Burniston, North Yorkshire</del></h6>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h6><del>June 5th, 2021 - Burniston, North Yorkshire</del></h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h6 className="new-date">Sept 10th, 2022 <br/>Burniston, North Yorkshire</h6>
                        </div>
                    </div>                    
                </div>
            </section>


        )
    }
}
