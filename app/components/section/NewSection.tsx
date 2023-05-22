import Image from 'next/image'
import SectionHeader from './SectionHeader'
import styles from './section.module.css'

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

                        <button>
                            Read More
                        </button>

                    </div>

                </div>

                <div className={styles.content}>

                    <Image src='/new-placeholder-1.png' width={448} height={246} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            Reduce, Reuse, Recycle
                        </h5>

                    </div>

                </div>

                <div className={styles.content}>

                    <Image src='/new-placeholder-2.png' width={448} height={246} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            A Fun Title
                        </h5>

                    </div>

                </div>

                <div className={styles.content}>

                    <Image src='/new-placeholder-3.png' width={448} height={246} alt='' />

                    <div className={styles.card_info}>

                        <h5>
                            What to expect when you follow me!
                        </h5>

                    </div>

                </div>

            </div>

        </section>
    )
}