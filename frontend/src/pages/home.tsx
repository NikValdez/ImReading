import Router from 'next/router';
import React from 'react';
import { withAuth } from '../utils/auth';
import { NextPage } from 'next';
import Layout from '../components/Layout';

// interface LoginValues {
//   email: string;
//   password: string;
// }

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default withAuth(HomePage);
