// jb named export hoga tb
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // destructuring on fly
    const { resData } = props;
    const { name, cuisines, avgRating, deliveryTime } = resData?.card?.card?.info;
    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={CDN_URL} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}</h5>
            <h5>{deliveryTime} min</h5>

        </div>
    )
};
export default RestaurantCard;