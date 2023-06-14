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
        <section id='new' className={styles.section}>
            
            <SectionHeader type='new' className={styles.new_header}>
                What&apos;s New
            </SectionHeader>

            <div>
                
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

                    {activePromos.length > 0 && activePromos.map(promo => <PromoCard promo={promo} key={promo.id} />)}

                </div>

                <div className={styles.btnDiv}>

                    <Link href='/promotions'>
                        <Button variant='solid'>
                            Show me more!
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    )
}