import { AppProps } from 'next/app';
// @ts-ignore
import { PageTransition } from 'next-page-transitions';
import React from 'react';
import '../styles/styles.scss';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../store/commands';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </Provider>
  );
}

export default MyApp;
