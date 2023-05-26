import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../Button'
import Link from 'next/link'
import BlogCard from '../cards/BlogCard'
import { getAllBlogs } from '@/lib/getAllBlogs'

export const revalidate = 3600

export default async function BlogsSection() {
    const blogs = await getAllBlogs()

    return (
        <section id='blogs'>

            <SectionHeader>
                Blogs
            </SectionHeader>

            <div className={styles.grid}>

                <p>
                    From tutorials, to new product releases, to everyday life, I&apos;ve got everything you need!
                </p>

                {blogs && blogs.map((blog: Blog, idx: number) => {
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