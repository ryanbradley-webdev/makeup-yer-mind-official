'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

export default function ImgCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (carouselRef.current && carouselRef.current.scrollLeft >= 0) {
            carouselRef.current.scrollLeft -= 300
        }
    }

    const scrollRight = () => {
        if (carouselRef.current && carouselRef.current.scrollLeft <= 968) {
            carouselRef.current.scrollLeft += 300
        }
    }

    return (
        <div className={styles.carousel_container}>

            <div className={styles.caret} onClick={scrollLeft}>

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>

            </div>

            <div className={styles.carousel} ref={carouselRef}>

                <div className={styles.carousel_item}>

                    <Image
                        src='/essentials-kit-lg.jpeg'
                        height={500}
                        width={500}
                        alt=''
                        className={styles.carousel_img}
                    />

                    <span>
                        The Essentials Kit ($99 US)
                    </span>

                </div>

                <div className={styles.carousel_item}>

                    <Image
                        src='/basic-artist-kit-lg.jpeg'
                        height={500}
                        width={500}
                        alt=''
                        className={styles.carousel_img}
                    />

                    <span>
                        Basic Artist Kit ($225 US)
                    </span>

                </div>

                <div className={styles.carousel_item}>

                    <Image
                        src='/pro-artist-kit-lg.jpeg'
                        height={500}
                        width={500}
                        alt=''
                        className={styles.carousel_img}
                    />

                    <span>
                        Pro Artist Kit ($450)
                    </span>

                </div>

            </div>

            <div className={styles.caret} onClick={scrollRight}>

                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                </svg>

            </div>

        </div>
    )
}