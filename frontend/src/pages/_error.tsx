import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return <div>{statusCode ? Router.push('/login') : 'An error occurred'}</div>;
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode;

  return {
    statusCode,
    namespacesRequired: ['common'],
  };
};

export default ErrorPage;
