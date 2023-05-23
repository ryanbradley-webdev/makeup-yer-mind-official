import Image from 'next/image'
import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../assets/Button'
import Link from 'next/link'

export default function BlogsSection() {
    return (
        <section id='blogs'>

            <SectionHeader>
                Blogs
            </SectionHeader>

            <div className={styles.grid}>

                <p>
                    From tutorials, to new product releases, to everyday life, I&apos;ve got everything you need!
                </p>

                <div className={styles.subcontent_grid}>

                    <div className={styles.subcontent}>

                        <Image src='/blog-placeholder-1.png' width={325} height={194} alt='' />

                        <h5>
                            Ride or Die Beauty Products
                        </h5>

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/blog-placeholder-2.png' width={325} height={194} alt='' />

                        <h5>
                            Basics of Eyeshadow
                        </h5>

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/blog-placeholder-3.png' width={325} height={194} alt='' />

                        <h5>
                            Clean and Compact
                        </h5>

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/blog-placeholder-4.png' width={325} height={194} alt='' />

                        <h5>
                            Basics of Contouring
                        </h5>

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/blog-placeholder-5.png' width={325} height={194} alt='' />

                        <h5>
                            Wing it. Eyeliner, life, everything...
                        </h5>

                    </div>

                    <div className={styles.subcontent}>

                        <Image src='/blog-placeholder-6.png' width={325} height={194} alt='' />

                        <h5>
                            St.Sational
                        </h5>

                    </div>

                </div>

                <Link href='/blogs'>
                    <Button alt>
                        See the rest of my blogs!
                    </Button>
                </Link>
                
            </div>

      </section>
    )
}