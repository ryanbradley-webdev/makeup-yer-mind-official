import Image from "next/image"
import styles from './cards.module.css'
import Link from "next/link"

export default function LargeBlogCard({
    blog,
    firstBlog
}: {
    blog: Blog,
    firstBlog?: boolean
}) {
    return (
        <Link className={styles.first_blog} href={`/blogs/${blog.slug}`}>

            <Image src={blog.image} width={448} height={337} alt='' />

            <div className={styles.card_info}>

                {
                    firstBlog &&
                    
                    <p className={styles.latest}>
                        Latest Blog
                    </p>
                }

                <h5>
                    {blog.title}
                </h5>

                <h6>
                    {blog.description}
                </h6>

            </div>

        </Link>
    )
}