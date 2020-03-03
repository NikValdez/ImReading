import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import withApollo from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_USERS = gql`
  query getUsers {
    users {
      name
    }
  }
`

const IndexPage: NextPage = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>error ...</p>
  console.log(data)
  // return console.log(data)
  return (
    <Layout title="Im Reading">
      <h1>Index Page</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>{JSON.stringify({ data })}</p>
    </Layout>
  )
}

export default withApollo(IndexPage)
