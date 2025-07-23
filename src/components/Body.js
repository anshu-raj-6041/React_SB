import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/mockData";
import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // local State variable => super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    // local state variable
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // console.log("useEffect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=25.60483902934017&lng=85.20777795463799&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");

        const json = await data.json();

        console.log(json);
        // Optional Chaining
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.info)



    };

    // Conditional Rendering => Rendering based on the condition
    return listOfRestaurants.length != 0 ? (
        <Shimmer />
    ) : (


        // Normal JS variable
        // let listOfRestaurantsJS = [
        //     {
        //         "card": {
        //             "card": {
        //                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        //                 "info": {
        //                     "id": "479796",
        //                     "name": "BBK",
        //                     "cloudinaryImageId": "fl0bvksh5ujstl8ny1hv",
        //                     "locality": "Kumharar",
        //                     "areaName": "Kumhrar",
        //                     "costForTwo": "₹400 for two",
        //                     "cuisines": [
        //                         "Sweets",
        //                         "Bakery",
        //                         "North Indian"
        //                     ],
        //                     "avgRating": 2.4,
        //                     "veg": true,
        //                     "parentId": "472621",
        //                     "avgRatingString": "4.4",
        //                     "totalRatingsString": "10K+",
        //                     "promoted": true,
        //                     "adTrackingId": "cid=31266486~p=0~adgrpid=31266486#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=479797~plpr=COLLECTION~eid=c909e686-e253-4f16-81c7-62b1e7689187~srvts=1752991874723~collid=80463",
        //                     "sla": {
        //                         "deliveryTime": 49,
        //                         "lastMileTravel": 4.2,
        //                         "serviceability": "SERVICEABLE",
        //                         "slaString": "45-50 mins",
        //                         "lastMileTravelString": "4.2 km",
        //                         "iconType": "ICON_TYPE_EMPTY"
        //                     },
        //                     "availability": {
        //                         "nextCloseTime": "2025-07-20 23:59:00",
        //                         "opened": true
        //                     },
        //                 }
        //             }
        //         }
        //     },
        //     {
        //         "card": {
        //             "card": {
        //                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        //                 "info": {
        //                     "id": "479797",
        //                     "name": "Harilal's",
        //                     "cloudinaryImageId": "fl0bvksh5ujstl8ny1hv",
        //                     "locality": "Kumharar",
        //                     "areaName": "Kumhrar",
        //                     "costForTwo": "₹400 for two",
        //                     "cuisines": [
        //                         "Sweets",
        //                         "Bakery",
        //                         "North Indian"
        //                     ],
        //                     "avgRating": 4.4,
        //                     "veg": true,
        //                     "parentId": "472621",
        //                     "avgRatingString": "4.4",
        //                     "totalRatingsString": "10K+",
        //                     "promoted": true,
        //                     "adTrackingId": "cid=31266486~p=0~adgrpid=31266486#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=479797~plpr=COLLECTION~eid=c909e686-e253-4f16-81c7-62b1e7689187~srvts=1752991874723~collid=80463",
        //                     "sla": {
        //                         "deliveryTime": 49,
        //                         "lastMileTravel": 4.2,
        //                         "serviceability": "SERVICEABLE",
        //                         "slaString": "45-50 mins",
        //                         "lastMileTravelString": "4.2 km",
        //                         "iconType": "ICON_TYPE_EMPTY"
        //                     },
        //                     "availability": {
        //                         "nextCloseTime": "2025-07-20 23:59:00",
        //                         "opened": true
        //                     },
        //                 }
        //             }
        //         }
        //     }

        // ]
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        // Filter the res Card and update the UI
                        // searchText
                        console.log(searchText);

                        const filteredRes = listOfRestaurants.filter((res) => res.data.name == searchText);
                        
                    }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        // filter logic here
                        const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4);
                        setListOfRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    // whenever u are looping over anything, u have to give key
                    listOfRestaurants.map((restaurant, index) => (
                        <RestaurantCard key={index} resData={restaurant} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;