export const initState = {
    items: [],
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (action.payload === "") {
                return state
            }
            const addedItem = {
                itemId: action.payload.id,
                name: action.payload.name,
                brand: action.payload.brandName,
                price: action.payload.price.current.text,
                priceValue: action.payload.price.current.value,
                img: `https://${action.payload.imageUrl}`,
                proId: `${action.payload.id}+${new Date().valueOf()}`
            }
            return {
                items: [...state.items, addedItem]
            }
        case "ADD_TO_CART_FROM_DETAILS":
            if (action.payload === "") {
                return state
            }
            const addedItemFromDetails = {
                itemId: action.payload.id,
                name: action.payload.name,
                brand: action.payload.brand.name,
                price: action.payload.price.current.text,
                priceValue: action.payload.price.current.value,
                img: `https://${action.payload.media.images[0].url}`,
                proId: `${action.payload.id}+${new Date().valueOf()}`
            }
            return {
                items: [...state.items, addedItemFromDetails]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.proId !== action.payload.proId)
            }
        default:
            return state
    }
}
