import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withAuth } from '../utils/auth';

const ME_QUERY = gql`
  query {
    me {
      id
      name
    }
  }
`;

const MePage: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error ...</p>;
  console.log(data.id);
  // return console.log(data)

  return (
    <div>
      <h1>Me Page</h1>
      <p>{JSON.stringify({ data })}</p>
    </div>
  );
};

export default withAuth(MePage);
