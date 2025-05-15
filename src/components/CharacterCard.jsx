import { Link } from "react-router-dom";

const style = {
    width: "18rem",
}

export const CharacterCard = ({ uid, name, dispatch }) => {

    return (
        <>
            <div className="card" style={style}>
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link to={`/profile-page/people/${uid}`}>
                            <button className="btn btn-primary">Learn More</button>
                        </Link>
                        <button 
                            className="btn btn-warning"
                            onClick={() => {
                                dispatch({
                                    type: 'favedProfile',
                                    payload: {uid: uid, name: name}
                                })
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
