import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Epsilon-Astronomy</title>
        <meta name="description" content="Epsilon-Astronomy, a site made for Astronomers to show them the most beautiful pictures of Galaxies, Nebula and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to <Link href="/">Epsilon-Astronomy</Link>
        </h1>

        <p className={styles.description}>
        Epsilon-Astronomy, a site made for Astronomers to show them the most beautiful pictures of Galaxies, Nebula and more. <br />
        These are best Astronomical Images of all time. These beautiful pictures are taken by Hubble Space Telescope.
        </p>

          
          <Image src="/heic1509a.jpg" alt="WL Nebula" width={128} height={95.9} />
          <Image src="/potw2049a.jpg" alt="NGC 1792" width={128} height={120.4} />
      </main>

      <Footer />
    </div>
  )
}
