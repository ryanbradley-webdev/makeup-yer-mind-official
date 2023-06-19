import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'
import Subscribe from './Subscribe'
import ExternalLink from '../ExternalLink'
import SocialLinks from '../SocialLinks'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <Subscribe />

            <div className={styles.container}>

                <Image src={'/Logo-Small.svg'} alt='' width={95} height={36} />

                <div className={styles.links}>

                    <Link href={'/terms-and-conditions'}>
                        Terms and Conditions
                    </Link>

                    <Link href={'/privacy-policy'}>
                        Privacy Policy
                    </Link>

                    <Link href={'/contact'}>
                        Contact
                    </Link>

                    <Link href={'/about'}>
                        About Me
                    </Link>

                </div>

            </div>

            <SocialLinks className={styles.iconDiv} />

            <p>
                &copy; {new Date().getFullYear()} Shades of Pink.<br />Designed and developed by <ExternalLink href='https://ryanbradleywebdev.com'>Ryan Bradley Web Design</ExternalLink>.
            </p>

        </footer>
    )
}