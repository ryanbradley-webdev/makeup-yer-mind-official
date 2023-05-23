import Image from 'next/image'
import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Video from '../../assets/Video'
import Instagram from '../../assets/Instagram'
import Button from '../../assets/Button'
import Link from 'next/link'

export default function NewSection() {
    return (
        <section id='new'>
            
            <SectionHeader>
                What&apos;s New
            </SectionHeader>

            <div className={styles.grid}>

                <div className={styles.content}>

                    <Image src='/new-placeholder-lg.png' width={448} height={337} alt='' />

                    <div className={styles.card_info}>

                        <p className={styles.latest}>
                            Latest Blog
                        </p>

                        <h5>
                            Find Your Skin Type
                        </h5>

                        <h6>
                            Take this short quiz to find your skin type!
                        </h6>

                    </div>

                </div>

                <div className={styles.btnDiv}>

                    <Link href='/'>
                        <Button>
                            Read More
                        </Button>
                    </Link>

                    <Link href='/blogs'>
                        <Button variant='solid'>
                            All Blogs
                        </Button>
                    </Link>

                </div>

                <p>
                    Check out my latest videos, Insta posts, and more!
                </p>

                <div className={styles.content}>

                    <Image src='/new-placeholder-1.png' width={448} height={246} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            Reduce, Reuse, Recycle
                        </h5>

                        <h6>
                            Check out this tutorial to see how I take old every-day items and turn them into super-useful tools for all of my accessories!
                        </h6>

                        <Video />

                    </div>

                </div>

                <div className={styles.content}>

                    <Image src='/new-placeholder-2.png' width={448} height={246} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            A Fun Title
                        </h5>

                        <h6>
                            I just needed another piece of content to round out this mockup. I don’t really have anything else substantive.
                        </h6>

                        <Instagram />

                    </div>

                </div>

                <div className={styles.content}>

                    <Image src='/new-placeholder-3.png' width={448} height={246} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            What to expect when you follow me!
                        </h5>

                        <h6>
                            Here’s a quick overview of all the fun content that I give you to help you out in your beauty journey!
                        </h6>

                        <Instagram />

                    </div>

                </div>

            </div>

        </section>
    )
}