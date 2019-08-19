const initialState = {
 selectedVideo : {
        title : '',
        year : '',
        plot : '',
        rated :''

    },
    imdbRating : ''
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_DATA" : 
                state = {...state};
                state.selectedVideo=action.payload;console.log(state)
                return state;
        case "SET_IMDB_RATING" : 
                state = {...state};
                state.imdbRating=action.payload.imdbRating;
                return state;
                
        default:
            return state;
    }
    
};
export default rootReducer;