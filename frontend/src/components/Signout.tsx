import React from 'react';
import cookie from 'js-cookie';
import Router from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  query {
    me {
      id
      name
    }
  }
`;

interface Props {}

const Logout: React.FC<Props> = () => {
  const { loading, data, error } = useQuery(GET_CURRENT_USER);
  if (loading) {
    return <div>Loading...</div>;
  }
  const removeToken = () => {
    cookie.remove('token');
    Router.push('/login');
  };
  return (
    <div>{data ? <button onClick={removeToken}>Logout</button> : null}</div>
  );
};

export default Logout;
