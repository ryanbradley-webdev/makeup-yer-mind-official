import Image from "next/image"
import styles from './cards.module.css'
import Link from "next/link"

export default function BlogCard({
    blog
}: {
    blog: Blog
}) {
    return (
        <Link className={styles.blog} href={`/blogs/${blog.slug}`}>

            <Image src={`/${blog.image}`} width={325} height={194} alt='' />

            <h5>
                {blog.title}
            </h5>

            <h6>
                {blog.description}
            </h6>

        </Link>
    )
}