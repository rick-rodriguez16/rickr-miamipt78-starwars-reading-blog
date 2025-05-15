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
    {
      const peopleArray = action.payload;
      return {
        ...store,
        allPeople: [...peopleArray]
      }
    }
    case 'fetchedAllPlanets':
      break;
    case 'fetchedAllVehicles':
      break;
    case 'favedProfile':
    {
      const { uid, name } = action.payload;
      const filteredArray = store.favorites.filter(favorite => favorite.name !== name)
      return {
        ...store,
        favorites: [...filteredArray, {uid: uid, name: name}]
      }
    }
    case 'removedFavorite':
    {
      const { name } = action.payload;
      const filteredArray = store.favorites.filter(favorite => favorite.name !== name)
      return {
        ...store,
        favorites: [...filteredArray]
      }
    }
    default:
      throw Error('Unknown action.');
  }    
}
