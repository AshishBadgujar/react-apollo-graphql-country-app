import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client"

const QUERY_LISTOF_COUNTRIES = gql`
{
    countries{
        name
        capital
        emoji
    }
}
`
export default function Home() {
    const { data, loading, error } = useQuery(QUERY_LISTOF_COUNTRIES)

    return (
        <div>
            <h1>list of countries</h1>
            <Link to="/search">go to search</Link>
            <div className="list-of-countries">
                {loading && <h2>loading...</h2>}
                {error && <h3>{error.message}</h3>}
                {data && data.countries.map((item, key) => (
                    <div key={key}>
                        <h2>{item.name}</h2>
                        <h2>{item.capital}{item.emoji}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
