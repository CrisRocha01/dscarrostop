import "./Card.css";
import carImg from "../../assets/car.png"

const Card = () => {
    return(
        <div className="card">
            <img src={carImg} alt="car image" />
            <p>Lorem ipsum dolor</p>
        </div>
    );

}

export default Card;