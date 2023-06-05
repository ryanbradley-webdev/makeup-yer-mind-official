import SectionHeader from './SectionHeader'
import Button from '../Button'
import Link from 'next/link'
import LargeBlogCard from '../cards/LargeBlogCard'
import PromoCard from '../cards/PromoCard'
import { getAllBlogs } from '@/lib/getAllBlogs'
import { getAllPromos } from '@/lib/getAllPromos'
import styles from './section.module.css'

export default async function NewSection() {
    const [
        blogs,
        { activePromos }
    ] = await Promise.all([
        getAllBlogs(),
        getAllPromos()
    ])

    return (
        <section id='new'>
            
            <SectionHeader>
                What&apos;s New
            </SectionHeader>

            <div className={styles.grid}>

                <LargeBlogCard blog={blogs[0]} firstBlog />

                <div className={styles.btnDiv}>

                    <Link href={`/blogs/${blogs[0].slug}`}>
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

            </div>

            <div className={styles.grid}>

                <PromoCard promo={activePromos[0]} />

                <div className={styles.btnDiv}>

                    <Link href='/promotions'>
                        <Button variant='solid'>
                            More promotions
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    )
}