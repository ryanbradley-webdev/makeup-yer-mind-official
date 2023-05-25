import { Metadata, ResolvingMetadata } from 'next/types';
import styles from './page.module.css'

import { SAMPLE_BLOGS } from '../sampleBlogs';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

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
    const slug = params.slug
    const PLACEHOLDER = SAMPLE_BLOGS[0]

    return (
        <main>
            
            <section className={styles.header}>

                <Image src={`/${PLACEHOLDER.image}`} height={337} width={448} alt='' />

                <h1>
                    {PLACEHOLDER.title}
                </h1>

                <h3>
                    {PLACEHOLDER.description}
                </h3>

            </section>

            <ReactMarkdown>
                hello
            </ReactMarkdown>

        </main>
    )
}