import React, { Component } from 'react';


export class Accom extends Component {
    render() {
        return (

            <section className="accom accom-2s">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2>Where To Stay?</h2>
                            <p className="accom-description-main"> Please find some accommodation suggestions below.<br/> These are our favourite in the area and the nearest to the venue in Burniston,<br/> however definitely also check out Air BnB and Booking.com, there are a number of hotels, Air BnB's and Bed and Breakfast's in Scarborough.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="feature col-sm-12">
                            <a href="http://duchyoflancasterholidaycottages.co.uk/cottage/scalby-lodge.php">
                                <img alt="Hotel" src="img/dutchy.jpg" />
                            </a>
                            <h6>Duchy of Lancaster Cottages</h6>
                            <p>
                                A 15 minute walk to the venue and 15 different sized cottages to choose from. <br/>
                                The location overlooks the sea, with lots of parking and beautiful decor. Our favourite + the closest!
                            </p>
                            <p>
                                <a href="http://duchyoflancasterholidaycottages.co.uk/cottage/scalby-lodge.php">
                                Duchy Of Lancaster Cottages Website
                            </a>
                            </p>
                        </div>

                        <div className="feature col-sm-12">
                            <a href="https://theploughscalby.co.uk/">
                               <img alt="Hotel" src="img/plough.jpg" />
                            </a>
                            <h6>The Plough<br/></h6>
                            <p>
                                Amazing local bistro pub with gorgeous rooms upstairs and 2-3 seperate cottages nearby. <br />
                                Located in the heart of Scalby Village around a 5-10 minute drive to the venue (they also do great food).
                            </p>
                            <p>
                                <a href="https://theploughscalby.co.uk/">https://theploughscalby.co.uk/</a>
                            </p>
                        </div>
                        <div className="feature col-sm-12">
                            <a href="https://escape2thesands.com/holiday-apartments">
                                <img alt="Hotel" src="img/Sands-2.jpg" />
                            </a>
                            <h6>The Sands<br/></h6>
                            <p>
                                Modern apartment complex right on Scarborough's North Bay beach. <br/>
                                They have different sized apartments available, beautiful location to enjoy the sea and around a 10 minute drive to the venue.
                            </p>
                            <p>
                                <a href="https://escape2thesands.com/holiday-apartments">The Sands website </a>
                            </p>
                        </div>

                        <div className="feature col-sm-12">
                            <a href="https://www.campingandcaravanningclub.co.uk/campsites/uk/north-yorkshire/scarborough/scarborough-camping-and-caravanning-club-site/">

                                <img alt="Hotel" src="img/campsite1.jpg" />
                            </a>
                            <h6>Scarborough Camping & Caravanning Club<br/></h6>
                            <p>
                                Great campsite for motorhomes and tents very close to the venue (5 minute drive).
                                <br/>They also have static glamping tents to rent that sleep up to 6 people.
                                <br/>Booking starts from January onwards. Showers etc on site and large pub next door.
                            </p>
                            <p>
                                <a href="https://www.campingandcaravanningclub.co.uk/campsites/uk/north-yorkshire/scarborough/scarborough-camping-and-caravanning-club-site/">Camping Website </a>
                            </p>
                        </div>

                        <div className="feature col-sm-12">
                            <a href="https://www.premierinn.com/gb/en/hotels/england/north-yorkshire/scarborough/scarborough-north-bay.html">
                                <img alt="Hotel" src="img/prem-inn.jpg" />
                            </a>
                            <h6>Premier Inn - North Bay<br/></h6>
                            <p>
                                New hotel close to Scarborough Beach and about a 5 minute drive to the wedding venue. 
                            </p>
                            <p>
                                <a href="https://www.premierinn.com/gb/en/hotels/england/north-yorkshire/scarborough/scarborough-north-bay.html">Premier Inn North bay website </a>
                            </p>
                        </div>

                        <div className="feature col-sm-12">
                            <a href="https://www.crownspahotel.com">
">
                                <img alt="Hotel" src="img/crownspa.png" />
                            </a>
                            <h6>Crown Spa Hotel<br/></h6>
                            <p>
                                Historic hotel on the South Bay Esplanade in Scarborough. Lots of room, good deals and a walkable distance into the centre of Scarborough and the lively beach. Approx. 15 minute taxi drive from venue. Incredible views!
                            </p>
                            <p>
                                <a href="https://www.crownspahotel.com">Crown Spa hotel website </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
