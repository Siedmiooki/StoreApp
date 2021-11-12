import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const kohlsApiHeaders = {
    'x-rapidapi-host': 'kohls.p.rapidapi.com',
    'x-rapidapi-key': 'c6d826f151msh90eaa36d2cc7f31p1a336cjsn010eacf45076'
    // 'x-rapidapi-key': `${process.env.REACT_APP_KOHLS_API}`
}

const baseUrl = 'https://kohls.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: kohlsApiHeaders });


export const kohlsApi = createApi({
    reducerPath: "kohlsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getList: builder.query({
            query: () => createRequest("/categories/list")
        })
    })
})

export const {
    useGetListQuery,
} = kohlsApi