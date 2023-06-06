import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../Button'
import Link from 'next/link'
import BlogCard from '../cards/BlogCard'
import { getAllBlogs } from '@/lib/getAllBlogs'

export default async function BlogsSection() {
    const blogs = await getAllBlogs()

    return (
        <section id='blogs' className={styles.section}>

            <SectionHeader type='blogs' className={styles.blogs_header}>
                Blogs
            </SectionHeader>

            <div>

                <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>

                    {blogs && blogs.map((blog: Blog, idx: number) => {
                        if (idx === 0 || idx > 6) return
                        return <BlogCard key={blog.id} blog={blog} />
                    })}
                    
                </div>

                <div className={styles.btnDiv}>

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