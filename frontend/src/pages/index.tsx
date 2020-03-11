import React from 'react';
import { NextPage } from 'next';
import { useApolloClient } from '@apollo/react-hooks';
import Layout from '../components/Layout';

import { useTranslation } from '../lib/i18n';

const IndexPage: NextPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  return (
    <div>
      <Layout>
        <h1>Index Page</h1>
      </Layout>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  };
};

export default IndexPage;
