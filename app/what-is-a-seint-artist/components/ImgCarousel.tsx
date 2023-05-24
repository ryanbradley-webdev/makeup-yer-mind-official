import Image from 'next/image'
import styles from '../page.module.css'

export default function ImgCarousel() {
    return (
        <div className={styles.carousel}>
            <Image src='/essentials-kit-lg.jpeg' height={500} width={500} alt='' />
            <Image src='/basic-artist-kit-lg.jpeg' height={500} width={500} alt='' />
            <Image src='/pro-artist-kit-lg.jpeg' height={500} width={500} alt='' />
        </div>
    )
}