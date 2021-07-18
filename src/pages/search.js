import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

const QUERY_LISTOF_COUNTRIES = gql`
query Country($code:ID!){
    country(code:$code){
        name
        capital
        emoji
        code
        currency
    }
}
`

export default function Search() {
    const [searchCountry, { data, loading, error }] = useLazyQuery(QUERY_LISTOF_COUNTRIES)

    const [search, setSearch] = useState('')
    return (
        <div>
            <input type="text" placeholder="IN.." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => searchCountry({
                variables: { code: search.toUpperCase() },
            })}>search</button>
            <div className="searched-country">
                {loading && <h2>loading...</h2>}
                {error && <h3>{error.message}</h3>}
                {data && <h1>{data.country.name}</h1>}
            </div>
        </div>
    )
}
