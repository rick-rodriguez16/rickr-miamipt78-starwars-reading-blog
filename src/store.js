export const initialStore=()=>{
  return{
    allPeople: [],
    allPlanets: [],
    allVehicles: [],
    singlePerson: [],
    singlePlanet: [],
    singleVehicle: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fetchedAllPeople':
      const peopleArray = action.payload;
      return {
        ...store,
        allPeople: [...peopleArray]
      }
    case 'fetchedAllPlanets':
      break;
    case 'fetchedAllVehicles':
      break;
    default:
      throw Error('Unknown action.');
  }    
}
