import Image from 'next/image'
import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../Button'
import Link from 'next/link'
import { SAMPLE_BLOGS } from '@/app/blogs/sampleBlogs'
import BlogCard from '../cards/BlogCard'

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

                {SAMPLE_BLOGS.map((blog, idx) => {
                    if (idx === 0) return
                    return <BlogCard key={blog.id} blog={blog} />
                })}

                <div className={styles.btnDiv}>

                    <Button variant='ghost'>
                        Load More
                    </Button>

                    <Link href='/blogs'>
                        <Button variant='solid'>
                            See the rest of my blogs!
                        </Button>
                    </Link>

                </div>
                
            </div>

      </section>
    )
}