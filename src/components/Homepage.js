import React from 'react'
import { useGetListQuery } from "../services/kohlsAPI"

function Homepage() {

    const { data, isFetching } = useGetListQuery();
    console.log(data)


    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}

export default Homepage
