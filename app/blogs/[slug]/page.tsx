import { Metadata } from 'next/types';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import { getBlogBySlug } from '@/lib/getBlogBySlug';
import rehypeRaw from 'rehype-raw';
import Signoff from '@/components/Signoff';
import { getAllBlogs } from '@/lib/getAllBlogs';
import { convertServerTimestamp } from '@/lib/convertServerTimestamp'
import Comments from '@/components/comments/Comments';
import SocialStats from '@/components/social-stats/SocialStats';
import Share from '@/components/share/Share';

type Params = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Params
): Promise<Metadata> {
    const slug = params.slug;

    const blog = await getBlogBySlug(slug)

    const metatdata = {
        title: blog?.title || 'Blog not found',
        descrition: blog?.description || 'No description found',
        openGraph: {
            images: [] as string[]
        }
    }

    if (blog) {
        metatdata.openGraph.images.push(blog.image)
    }

    return metatdata
}

export async function generateStaticParams() {
    const blogs = await getAllBlogs()

    return blogs.map(blog => blog.slug)
}

export default async function BlogBySlug({ params }: Params) {
    const { slug } = params
    const blog = await getBlogBySlug(slug)

    if (!blog) {
        notFound()
    }

    const {
        id,
        title,
        description,
        image,
        createdAt,
        updatedAt,
        content,
        likes,
        views,
        docType
    } = blog

    return (
        <main className={styles.main}>
            
            <section className={styles.header}>

                <div>

                    <h1>
                        {title}
                    </h1>

                    {convertServerTimestamp(createdAt, updatedAt)}

                    <SocialStats
                        docLikes={likes}
                        docIsLiked={false}
                        id={id}
                        docType={docType}
                        views={views}
                    />

                </div>

                <Image src={image} height={337} width={448} alt='' />

                <h3>
                    {description}
                </h3>

            </section>

            <section className={styles.content_section}>

                <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    className={styles.content}
                >
                    {content}
                </ReactMarkdown>

                <Signoff />

                <SocialStats
                    docLikes={likes}
                    docIsLiked={false}
                    id={id}
                    docType={docType}
                    views={views}
                />

                <aside className={styles.share}>

                    <p>
                        Share this article:
                    </p>

                    <Share />

                </aside>
                
            </section>

            <Comments id={id} />

        </main>
    )
}