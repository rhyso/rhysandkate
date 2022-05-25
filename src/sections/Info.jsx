import React, { Fragment, Component } from 'react';


export class Info extends Component {
    render() {
        return (
        <Fragment>

            <section className="story story-2 venue-info info section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Wedding Venue</h2>
                            <p>
                                <a href="https://wildwoodandeden.co.uk/" target="_blank" title="Wildwood and Eden">
                                    <img className="WE-logo" alt="WE" src="img/WE-logo-150x150.png" />
                                </a><br/>
                                Website Link: <a href="https://wildwoodandeden.co.uk/" target="_blank" className="link-to-barn" title="Wildwood and Eden"> Wildwood and Eden</a>
                            </p>
                            <p>
                            Flatts Farm, Coastal Road, Burniston, Scarborough, YO13 0HR<br/><br/>
                            Phone: 0800 644 4196
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="story story-2 info itinerary">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Itinerary</h2>
                           <p>
                               <ul>
                                   <li><h2>FRIDAY 9TH SEPT</h2></li>
                                   <li>For anyone that wants a little pre-wedding tipple, we recommend <a href="https://www.theploughscalby.co.uk" target="_blank">The Plough</a> pub in Scalby, they also do great food.</li>
                                   <br/>
                                   <li><h2>SATURDAY 10TH SEPT </h2></li>
                                   <li><h4>1pm</h4> Please be seated </li>
                                   <li><h4>1:30pm</h4> We say I do! </li>
                                   <li><h4>3pm</h4> Let's eat</li>
                                   <li><h4>6pm</h4> Let's celebrate & let the dancing commence </li>
                                   <li><h4>11pm</h4> Secret Garden Party <br/>Please join us next door for the wedding after party at Kate’s family home, where the festivities will continue. The house is short two minute walk away and we will head back as a group after the music finishes. If you would prefer to go home at this point, please arrange a taxi from the wedding venue (Flatt’s Farm (The Barn), Coastal Road, YO13 OHR), to pick you up no later then 11.30pm</li>
                                   <li><h4>1-2am</h4> Home time -  Taxis Please pre-order a taxi, after party address: Wayside Farm, Coastal Road, Burniston, YO13 0DB</li><br/>
                                   <li><h2>SUNDAY 11TH SEPT</h2></li>
                                   <li>On Sunday we will be having a BBQ at Kate’s family home from 1pm onwards, we would love for you to join us (all children, partners invited) and the address is as above </li>
                                   <li></li>
                               </ul>
                           </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story story-2 info section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Guest Information</h2>
                            <p>
                                -  Due size limitations of our venue, aside from babes in arms, unfortunately we are unable to invite children to the  wedding day, outside of the wedding party. However everyone is invited to the Sunday BBQ at Kate’s house! 
                                <br/><br/>- Please note that our bar is CASH ONLY (it's the 1990's again), so please come prepared! <br/><br/>
                                <p>The nearest cashpoints are located below: <br/><br/>

                                    - Tesco Express, 83-85 Burniston Rd, Scarborough YO12 6PH<br/>
                                    - Proudfoots, 401 Scalby Rd, Newby, Scarborough YO12 6TQ</p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story story-2 info">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Travel</h2>
                            <p>
                            Burniston is a small village close to the seaside resort of Scarborough, it is easily accessible by car or train. The train station is located in the center of Scarborough, with a taxi rank next door (Station Taxi's). 
                            By taxi or car, Burniston is a 10-minute drive from Scarborough. 
                                </p>
                        </div>
                    </div>
                </div>
            </section>

          <section className="story story-2 section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Train</h2>
                            <p>
                            If coming up by train, you will need to get the train to York and then a connecting train to Scarborough (from York - Scarborough, it takes 45 minutes and they leave every hour) N.B. York is a beautiful Cathedral city - so if you have a chance we definitely recommend taking a couple of hours to visit.
                            From the train station, it is just a short 10 minute walk into the city centre, where you will find lots of shops, restaurants and bars 
                            </p>
                            <br/><br/>
                            <h2>Taxis</h2><br/>
                            <p>
                            Please find a list of taxi companies located in Scarborough. We definitely recommend pre-booking any taxi’s 
                            </p>
                            <p>
                                <ul>
                                    <li>Station Taxis: 01723 366366</li>
                                    <li>Nippy: 01723 377377</li>
                                    <li>Beeline: 01723 366666</li>
                                    <li>Boro: 01723 361111</li>
                                </ul>
                            </p>
                            <br/><br/>
                            <h2>Car</h2>
                            <p>If you are driving on the wedding day, there is parking at the wedding venue where you can also leave your car over night. </p>
                        </div>
                    </div>
                </div>
            </section>


        </Fragment>

        )
    }
}
