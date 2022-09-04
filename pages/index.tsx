import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import twitterLogo from '../assets/twitter-logo.svg'
// Constants
const TWITTER_HANDLE = '_buildspace'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles['header-container']}>
          <p className={styles['header']}>🖼 GIF Portal</p>
          <p className={styles['sub-text']}>
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        <div className={styles['footer-container']}>
          <Image
            width={35}
            alt="Twitter Logo"
            className={styles['twitter-logo']}
            src={twitterLogo}
          />
          <a
            className={styles['footer-text']}
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default Home
