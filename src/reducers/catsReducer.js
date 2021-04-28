// add the catsReducer

const catsReducer = (state = {
    cats: [],
    loading: false
}, action) => {
    switch(action.type){
        case "LOADING_CATS":
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }

        case "ADD_CATS":
            return {
                ...state,
                cats: action.cats,
                loading: false
            }

        default:
            return state
    }
}

export default catsReducer

// Is the second copying of the cats key in "LOADING_CATS" meant to deep copy or something like that?