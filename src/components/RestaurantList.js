import { Button } from "rbx";
import React, { useState } from 'react';
import Restaurant from './Restaurant/Restaurant';
import Preference from "./Preference/Preference";



const RestaurantList = ({ events }) => {
    const [cuisine, setCuisine] = useState('Pick Cuisine');
    const [maxsize,setMaxSize] = useState('10');

    const ANDMatch = event => cuisine === event.cuisine;

    const matchedRestaurants = (events) => {
        if (cuisine === 'Pick Cuisine' || cuisine === "All") {
            return events;
        }
        else {
            return events.filter(ANDMatch);
        }
    };

    const availableWords = (restaurantList) => {
        if (restaurantList.length > 0) {
            return "Available restaurants:";
        }
        else {
            return "No restaurants are available";
        }
    };


    if (matchedRestaurants) { console.log("there are restaurants available") } else { console.log("no restaurant available") }
    console.log(events);

    return (
        <React.Fragment>
            <Preference state={{ cuisine, setCuisine,maxsize,setMaxSize }} />

                <div className='restaurant-list'>
                    {availableWords(matchedRestaurants(events))}
                {/* <div class="row"> */}
                    <center>
                        <div class="col-md-6 restaurant-info" alt="Max-width 100%">
                            <ul class='restaurant'>
                                {matchedRestaurants(events).map(event =>
                                    <Restaurant key={event.id} event={event} />)}
                            </ul>
                        </div>
                    </center>

                    {/* </div> */}
                </div>
        </React.Fragment>
    );
};

export default RestaurantList;