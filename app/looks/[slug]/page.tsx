import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from './page.module.css'
import { getLookBySlug } from '@/lib/getLookBySlug'
import { Metadata } from 'next/types'
import { getAllLooks } from '@/lib/getAllLooks'
import { convertServerTimestamp } from '@/lib/convertServerTimestamp'

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

    const {
        title,
        description,
        image1,
        image2,
        createdAt,
        updatedAt,
        colors,
        tags,
        content,
        comments,
        likes
    } = look

    return (
        <main className={styles.main}>
            
            <section className={styles.header}>

                <div className={styles.img_container}>

                    <Image src={image1} height={646} width={550} alt='' />
                        
                    <Image src={image2} height={646} width={550} alt='' />

                </div>

                <h1>
                    {title}
                </h1>

                <h3>
                    {description}
                </h3>

                {convertServerTimestamp(createdAt, updatedAt)}

            </section>

            <section className={styles.content}>

                <ReactMarkdown>
                    {content}
                </ReactMarkdown>

            </section>


        </main>
    )
}