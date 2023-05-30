import SectionHeader from './SectionHeader'
import Button from '../Button'
import Link from 'next/link'
import LargeBlogCard from '../cards/LargeBlogCard'
import { getAllBlogs } from '@/lib/getAllBlogs'
import styles from './section.module.css'
import PromoCard from '../cards/PromoCard'

const SAMPLE_PROMO: Promo = {
    title: 'Get a discount on your Seint Products!',
    description: 'For a limited time, get a significant discount on your makeup. You just have to follow a few simple steps!',
    id: '1',
    slug: 'get-a-discount-on-your-seint-products',
    image: '/promo-placeholder.png',
    link: '/',
    docType: 'promotion',
    active: true
}

export default async function NewSection() {
    const blogs = await getAllBlogs()

    return (
        <section id='new'>
            
            <SectionHeader>
                What&apos;s New
            </SectionHeader>

            <div className={styles.grid}>

                <LargeBlogCard blog={blogs[0]} firstBlog />

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
                    Latest Promotions
                </p>

                <PromoCard promo={SAMPLE_PROMO} />

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