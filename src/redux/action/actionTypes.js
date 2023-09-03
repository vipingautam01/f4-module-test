export const loadingFunc = () => {
    return {
        type: "LOADING",
    }
}

export const successFunc = (data) => {
    return {
        type: "SUCCESS",
        payload: data
    }
}

export const errorFunc = (error) => {
    return {
        type: "ERROR",
        payload: error
    }
}

export const addToSearch = (searchString) => {
    return{
        type: "ADD",
        payload: searchString
    }
}

export const singleLoadingFunc = () => {
    return{
        type:"SINGLE_LOADING"
    }
}

export const singleSuccessFunc = (data) => {
    return{
        type:"SINGLE_SUCCESS",
        payload: data
    }
}

export const singleErrorFunc = (error) => {
    return{
        type:"SINGLE_ERROR",
        payload: error
    }
}