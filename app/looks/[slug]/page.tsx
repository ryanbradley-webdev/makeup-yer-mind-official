import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from './page.module.css'
import { getLookBySlug } from '@/lib/getLookBySlug'
import { Metadata } from 'next/types'
import { getAllLooks } from '@/lib/getAllLooks'

type Params = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Params,
): Promise<Metadata> {
    const { slug } = params

    // fetch data
    const look = await getLookBySlug(slug)

    return {
        title: look?.title || 'Look not found'
    }
}

export async function generateStaticParams() {
    const looks = await getAllLooks()

    return looks.map(look => look.slug)
}

export default async function LookBySlug({ params }: Params) {
    const { slug } = params
    const look = await getLookBySlug(slug)

    if (!look) {
        notFound()
    }

    return (
        <main>
            
            <section className={styles.header}>

                <Image src={look.image1} height={646} width={550} alt='' />
                <Image src={look.image2} height={646} width={550} alt='' />

                <h1>
                    {look.title}
                </h1>

                <h3>
                    {look.description}
                </h3>

            </section>

            <ReactMarkdown>
                {look.content}
            </ReactMarkdown>

        </main>
    )
}