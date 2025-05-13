import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";
import { CharacterCardList } from "../components/CharacterCardList";

export const StarWarsLandingPage = () => {
    const { store, dispatch } = useGlobalReducer();

    // we need to find a solution where we fetch the information from SWAPI one time only.
    // This will save on unneccesary fetches that slow load times and cost money
    useEffect(() => {
        fetchAllPeople(dispatch);
        // fetchAllPlanets(dispatch);
        // fetchAllVehicles(dispatch);
    }, [])

    
    return (
        <>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <div>
                        <h1>Characters</h1>
                        <CharacterCardList 
                            allpeople={store.allPeople}
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    );
}
