import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>

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


            <p>
                &copy; 2023 Shades of Pink. Designed and developed by Ryan Bradley Web Design.
            </p>

        </footer>
    )
}