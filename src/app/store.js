import { configureStore } from "@reduxjs/toolkit";

import { kohlsApi } from "../services/kohlsAPI"

export default configureStore({
    reducer: {
        [kohlsApi.reducerPath]: kohlsApi.reducer,
    },
});