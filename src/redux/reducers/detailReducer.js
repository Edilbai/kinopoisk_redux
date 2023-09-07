import { FILMS_DETAIL } from "./type"

const initialState = []
const detailReducer = (film = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case FILMS_DETAIL:
            return payload
        default:
            return film
    }
}

export default detailReducer;