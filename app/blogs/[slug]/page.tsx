import { Metadata, ResolvingMetadata } from 'next/types';
import styles from './page.module.css'

import { SAMPLE_BLOGS } from '../sampleBlogs';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { notFound } from 'next/navigation'

type Params = {
    params: { slug: string }
}

/* export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug;

    // fetch data
    const blog = await fetch(`https://.../${slug}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent)?.openGraph?.images || []

    return {
        title: blog.title,
        openGraph: {
            images: [ blog.image, ...previousImages ],
        }
    }
} */

export default function BlogBySlug({ params }: Params) {
    const { slug } = params
    const blog = SAMPLE_BLOGS.find(blog => blog.slug === slug)

    if (!blog) {
        notFound()
    }

    return (
        <main>
            
            <section className={styles.header}>

                <Image src={`/${blog.image}`} height={337} width={448} alt='' />

                <h1>
                    {blog.title}
                </h1>

                <h3>
                    {blog.description}
                </h3>

            </section>

            <ReactMarkdown>
                hello
            </ReactMarkdown>

        </main>
    )
}