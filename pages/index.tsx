import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test ISendU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}></Container>
    </div>
  );
};

export default Home;
