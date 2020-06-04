import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, Drawer } from '@material-ui/core';
import styled from 'styled-components';
import KeysList from '../KeysList/KeysList';

const Wrap = styled(Card)`
  padding: 16px;
`;

const Layout = (props: any) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Wrap>
          <Link href="/">
            <Button href="#contained-buttons">Назад</Button>
          </Link>
          <Button onClick={() => setIsOpen(!isOpen)}>Keys</Button>
          <Drawer
            anchor="right"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <KeysList />
          </Drawer>
        </Wrap>
        {children}
      </main>
    </div>
  );
};

export default Layout;
