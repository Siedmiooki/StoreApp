import { configureStore } from "@reduxjs/toolkit";

import { asosApi } from "../services/asosAPI"

export default configureStore({
    reducer: {
        [asosApi.reducerPath]: asosApi.reducer,
    },
});