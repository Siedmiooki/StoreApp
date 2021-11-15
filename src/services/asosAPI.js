import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const asosApiHeaders = {
    'x-rapidapi-host': 'asos2.p.rapidapi.com',
    'x-rapidapi-key': 'c6d826f151msh90eaa36d2cc7f31p1a336cjsn010eacf45076'
}

const baseUrl = 'https://asos2.p.rapidapi.com';

// const createRequest = (url) => ({ url, headers: asosApiHeaders, params: { limit: "12" } });
const createRequest = (url) => ({ url, headers: asosApiHeaders });


export const asosApi = createApi({
    reducerPath: "asosApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getList: builder.query({
            query: (id) => createRequest(`/products/v2/list?categoryId=${id}`)
        })
    })
})

export const {
    useGetListQuery,
} = asosApi