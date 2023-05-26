import { Metadata } from 'next/types';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import { getBlogBySlug } from '@/lib/getBlogBySlug';
import rehypeRaw from 'rehype-raw';
import Signoff from '@/components/Signoff';

type Params = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Params
): Promise<Metadata> {
    const slug = params.slug;

    // fetch data
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

export default async function BlogBySlug({ params }: Params) {
    const { slug } = params
    const blog = await getBlogBySlug(slug)

    if (!blog) {
        notFound()
    }

    const date = () => {
        const timestamp = blog.updatedAt ? blog.updatedAt.seconds : blog.createdAt.seconds
        const date = new Date(timestamp * 1000).toDateString()
        return (
            <h5>
                <span>
                    {blog.updatedAt ? 'Updated: ' : 'Posted: '}
                </span>
                {date}
            </h5>
        )
    }

    return (
        <main className={styles.main}>
            
            <section className={styles.header}>

                <h1>
                    {blog.title}
                </h1>

                <h3>
                    {blog.description}
                </h3>

                <Image src={blog.image} height={337} width={448} alt='' />

                {date()}

            </section>

            <section>

                <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    className={styles.content}
                >
                    {blog.content}
                </ReactMarkdown>

                <Signoff />
                
            </section>

        </main>
    )
}