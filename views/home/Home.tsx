import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import { FC } from 'react'
import twitterLogo from '../../assets/twitter-logo.svg'
import { TWITTER_HANDLE, TWITTER_LINK } from '../../constants'
import styles from './Home.module.css'
export const Home: FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles['header-container']}>
          <p className={styles['header']}>🖼 GIF Portal</p>
          <p className={styles['sub-text']}>
            View your GIF collection in the metaverse ✨
          </p>
          <WalletMultiButton style={{ margin: 'auto' }} />
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
