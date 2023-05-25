import Image from 'next/image'
import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../Button'
import Link from 'next/link'

export default function LooksSection() {
    return (
        <section id='looks'>

            <SectionHeader>
                Find a New Look
            </SectionHeader>

            <div className={styles.grid}>

                <div className={styles.first_look}>

                    <Image src='/look-placeholder-lg.png' height={646} width={550} alt='' />
                    <Image src='/look-placeholder-lg-2.png' height={646} width={550} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            Thankful
                        </h5>

                        <div className={styles.colors}>

                            <Image src='/georgia.PNG' height={20} width={36} alt='' />
                            <Image src='/leo.PNG' height={20} width={36} alt='' />
                            <Image src='/ginger.PNG' height={20} width={36} alt='' />
                            <Image src='/coco.PNG' height={20} width={36} alt='' />

                        </div>

                        <h6>
                            Today is a day to be thankful for all that we have.
                        </h6>

                    </div>

                </div>

                <div className={styles.btnDiv}>

                    <Link href=''>
                        <Button>
                            Read More
                        </Button>
                    </Link>

                    <Link href='/looks'>
                        <Button variant='solid'>
                            All Looks
                        </Button>
                    </Link>

                </div>

                <p>
                    I&apos;ve got a whole bunch of looks for you to try, I know you&apos;ll find one you&apos;ll love!
                </p>

                    <div className={styles.subcontent}>

                        <Image src='/look-placeholder-2l.png' width={200} height={240} alt='' />
                        {/* <Image src='/look-placeholder-2r.png' width={200} height={240} alt='' /> */}

                        <h5>
                            Titletown
                        </h5>

                        {/* <div className={styles.colors}>

                            <Image src='/georgia.png' width={36} height={20} alt='' />
                            <Image src='/no-33.png' width={36} height={20} alt='' />
                            <Image src='/emerald-city.png' width={36} height={20} alt='' />

                        </div> */}

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/look-placeholder-3l.png' width={200} height={240} alt='' />
                        {/* <Image src='/look-placeholder-3r.png' width={200} height={240} alt='' /> */}

                        <h5>
                            Dreamy Autumn Eyes
                        </h5>

                        {/* <div className={styles.colors}>

                            <Image src='/drift.png' width={36} height={20} alt='' />
                            <Image src='/ginger.png' width={36} height={20} alt='' />
                            <Image src='/pomegranate.png' width={36} height={20} alt='' />
                            <Image src='/coco.png' width={36} height={20} alt='' />

                        </div> */}

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/look-placeholder-4.png' width={200} height={240} alt='' />
                        {/* <Image src='/look-placeholder-3r.png' width={200} height={240} alt='' /> */}

                        <h5>
                            Persephone
                        </h5>

                        {/* <div className={styles.colors}>

                            <Image src='/drift.png' width={36} height={20} alt='' />
                            <Image src='/ginger.png' width={36} height={20} alt='' />
                            <Image src='/pomegranate.png' width={36} height={20} alt='' />
                            <Image src='/coco.png' width={36} height={20} alt='' />

                        </div> */}

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/look-placeholder-5.png' width={200} height={240} alt='' />
                        {/* <Image src='/look-placeholder-3r.png' width={200} height={240} alt='' /> */}

                        <h5>
                            Sweetheart
                        </h5>

                        {/* <div className={styles.colors}>

                            <Image src='/drift.png' width={36} height={20} alt='' />
                            <Image src='/ginger.png' width={36} height={20} alt='' />
                            <Image src='/pomegranate.png' width={36} height={20} alt='' />
                            <Image src='/coco.png' width={36} height={20} alt='' />

                        </div> */}

                    </div>

                </div>

                <Link href='/looks'>
                    <Button variant='solid'>
                        See the rest of my looks!
                    </Button>
                </Link>

        </section>
    )
}