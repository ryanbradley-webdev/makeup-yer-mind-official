import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { getLookBySlug } from '@/lib/getLookBySlug'
import { Metadata } from 'next/types'
import { getAllLooks } from '@/lib/getAllLooks'
import { convertServerTimestamp } from '@/lib/convertServerTimestamp'
import ColorBtn from './components/ColorBtn'
import { v4 as uuid } from 'uuid'
import styles from './page.module.css'
import Comments from '@/components/comments/Comments'
import SocialStats from '@/components/social-stats/SocialStats'
import Share from '@/components/share/Share'
import rehypeRaw from 'rehype-raw'
import TagsAndTopics from '@/components/tags-and-topics/TagsAndTopics'
import IncrementPageViews from '@/components/social-stats/IncrementPageViews'

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
        title: look?.title || 'Look not found',
        description: look?.description || 'Look not found'
    }
}

export async function generateStaticParams() {
    const looks = await getAllLooks()

    return looks.map(look => look.slug)
}

export const revalidate = 60 // FIXME increase revalidate counter for production

export default async function LookBySlug({ params }: Params) {
    const { slug } = params
    const look = await getLookBySlug(slug)

    if (!look) {
        notFound()
    }

    const {
        id,
        title,
        description,
        image1,
        image2,
        createdAt,
        updatedAt,
        colors,
        tags,
        content,
        likes,
        views,
        docType
    } = look

    return (
        <main className={styles.main}>
            
            <section className={styles.header}>

                <div>

                    <h1>
                        {title}
                    </h1>

                    {convertServerTimestamp(createdAt, updatedAt)}

                    {tags.length > 0 && <TagsAndTopics content={tags}>
                        Tags
                    </TagsAndTopics>}

                    <SocialStats
                        docViews={views}
                        docLikes={likes}
                        docIsLiked={false}
                        id={id}
                        docType={docType}
                    />

                    <Share />

                </div>

                <div className={styles.img_container}>

                    <Image src={image1} height={646} width={550} alt='' />
                        
                    <Image src={image2} height={646} width={550} alt='' />

                </div>

                <h3>
                    {description}
                </h3>

                <div className={styles.color_div}>

                    {colors.map(color => (
                        <ColorBtn color={color} key={uuid()} />
                    ))}

                </div>

            </section>

            <section className={styles.content_container}>

                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className={styles.content}
                >
                    {content}
                </ReactMarkdown>

                <SocialStats
                    docLikes={likes}
                    docIsLiked={false}
                    id={id}
                    docType={docType}
                    docViews={views}
                />

                <aside className={styles.share}>

                    <p>
                        Share this article:
                    </p>

                    <Share />

                </aside>

            </section>

            <Comments id={id} />

            <IncrementPageViews
                id={id}
                docType={docType}
                docViews={views}
            />

        </main>
    )
}