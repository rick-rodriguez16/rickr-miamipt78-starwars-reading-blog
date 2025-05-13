import { Link } from "react-router-dom";

const style = {
    width: "18rem",
}

export const CharacterCard = ({ uid, name }) => {

    return (
        <>
            <div className="card" style={style}>
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/profile-page/people/${uid}`}>
                        <button className="btn btn-primary">Learn More</button>
                    </Link>
                </div>
            </div>
        </>
    );
}