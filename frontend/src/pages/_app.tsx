import React from 'react';
import App from 'next/app';

import './_app.scss';

import { withApollo } from '../lib/apollo';
import { appWithTranslation } from '../lib/i18n';
import { AuthProvider } from '../utils/auth';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withApollo(appWithTranslation(MyApp));
