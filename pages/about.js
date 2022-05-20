import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className={styles.container}>
    <Head>
        <title>About - Epsilon-Astronomy</title>
        <meta name="description" content="Epsilon-Astronomy, a site made for Astronomers to show them the most beautiful pictures of Galaxys, Nebula and more." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
        <Nav />
    <div className={styles.main}>
        <h1 className={styles.title}>
          About - Epsilon-Astronomy
        </h1>
        <div className={styles.description}>
            Epsilon-Astronomy, a site made for Astronomers to show them the most beautiful pictures of Galaxys, Nebula and more.
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default About