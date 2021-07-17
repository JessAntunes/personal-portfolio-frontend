// eslint-disable-next-line
export default (state = [], action) => {
    switch(action.type){
        case "SET_ARTWORKS":
            return [...action.payload]
        default:
            return state
    }
}