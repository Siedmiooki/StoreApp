export const initState = {
    items: [],
    likes: [],
    orders: [],
};

export const storeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ORDER":
            if (action.payload === "") {
                return state
            }
            const orderInfo = action.payload;
            const orderItems = state.items
            const newOrder = {
                orderInfo,
                orderItems
            }
            return {
                ...state,
                orders: [...state.orders, newOrder],
                items: []
            }
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
                ...state,
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
                ...state,
                items: [...state.items, addedItemFromDetails]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.proId !== action.payload.proId)
            }
        case "ADD_TO_LIKES":
            if (action.payload === "") {
                return state
            }
            const addedLike = {
                itemId: action.payload.id,
                name: action.payload.name,
                brand: action.payload.brandName,
                price: action.payload.price.current.text,
                priceValue: action.payload.price.current.value,
                img: `https://${action.payload.imageUrl}`,
                proId: `${action.payload.id}+${new Date().valueOf()}`
            }
            return {
                ...state,
                likes: [...state.likes, addedLike]
            }
        case "ADD_TO_LIKES_FROM_DETAILS":
            if (action.payload === "") {
                return state
            }
            const addedLikeFromDetails = {
                itemId: action.payload.id,
                name: action.payload.name,
                brand: action.payload.brand.name,
                price: action.payload.price.current.text,
                priceValue: action.payload.price.current.value,
                img: `https://${action.payload.media.images[0].url}`,
                proId: `${action.payload.id}+${new Date().valueOf()}`
            }
            return {
                ...state,
                likes: [...state.likes, addedLikeFromDetails]
            }
        case "REMOVE_FROM_LIKES":
            return {
                ...state,
                likes: state.likes.filter(likeItem => likeItem.proId !== action.payload.proId)
            }
        default:
            return state
    }
}
