import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from './page.module.css'

import { SAMPLE_LOOKS } from '../sampleLooks'

type Params = {
    params: { slug: string }
}

/* export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug;

    // fetch data
    const look = await fetch(`https://.../${slug}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent)?.openGraph?.images || []

    return {
        title: look.title,
        openGraph: {
            images: [ look.image, ...previousImages ],
        }
    }
} */

export default function LookBySlug({ params }: Params) {
    const { slug } = params
    const look = SAMPLE_LOOKS.find(look => look.slug === slug)

    if (!look) {
        notFound()
    }

    return (
        <main>
            
            <section className={styles.header}>

                <Image src={`/${look.image1}`} height={646} width={550} alt='' />
                <Image src={`/${look.image2}`} height={646} width={550} alt='' />

                <h1>
                    {look.title}
                </h1>

                <h3>
                    {look.description}
                </h3>

            </section>

            <ReactMarkdown>
                hello
            </ReactMarkdown>

        </main>
    )
}