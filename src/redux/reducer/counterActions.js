
const initialState = {
    loading : false,
    data : [],
    error : "",
    searchHistory: [],
    
    singleLoading: false,
    singleData: [],
    singleError: ""
}

const getReducer = (state = initialState, action) => {
    if(action.type === "LOADING"){
        return{
            ...state,
            loading: true
        }
    }else if(action.type === "SUCCESS"){
        return{
            ...state,
            loading: false,
            data: action.payload
        }
    }else if(action.type === "ERROR"){
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    }else if(action.type === "ADD"){
        return {
            ...state,
            loading: false,
            searchHistory: [...state.searchHistory, action.payload]
        }
    }else if(action.type === "SINGLE_LOADING"){
        return{
            ...state,
            singleLoading: true
        }
    }else if(action.type === "SINGLE_SUCCESS"){
        return{
            ...state,
            singleLoading: false,
            singleData: action.payload
        }
    }else if(action.type === "SINGLE_ERROR"){
        return {
            ...state,
            singleLoading: false,
            singleError: action.payload
        }
    }
       
    else{
        return state;
    }
}

export default getReducer;