import React, { Component } from 'react';


export class Story extends Component {
    render() {
        return (

            <section className="story story-2 kateandrhys">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                            <h2>Our wedding!</h2>
                        </div>
                        <div className="text-center col-sm-12">
                            <img alt="Photo" src="img/kate1.jpg" />
                            <img alt="Photo" src="img/kate2.png" />
                            <img alt="Photo" src="img/kate4.jpg" />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center aw-shucks">
                            <h2> Aw shucks</h2>
                            <p>
                            After eight years, two rescheduled weddings and a baby, we are finally 
                            getting married and we cannot wait to celebrate with you all. </p>                           
                            <p>Thanks to a couple of amazing friends we met by chance in a pub in London on a Friday night.
                                Both of us were not supposed to be there and had prior plans, Rhys - picking up dry cleaning 
                                and for me a classic solo cinema trip. 
                                Luckily, something in the air that night made us get our acts together and the rest is history. </p>
                            <p>Now after a global pandemic, it is finally time to party and make this thing legal. 
                                Below you will find some recommendations for accommodation and travel along with the wedding day and weekend itinerary. 
                                </p>
                            <p>Big love and bring on September!</p>
                            
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
