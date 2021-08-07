export const addToCart = book => {
    return {
        type : 'ADD_TO_CART',
        payload : book
    }
}

export const removeToCart = id => {
    return {
        type: 'REMOVE_TO_CART',
        payload: id
     }
}