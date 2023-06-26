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
import TagsAndTopics from '@/components/tags-and-topics/TagsAndTopics';
import IncrementPageViews from '@/components/social-stats/IncrementPageViews';
import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';
import Button from '@/components/Button';

type Params = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Params
): Promise<Metadata> {
    const slug = params.slug;

    const blog = await getBlogBySlug(slug)

    const metadata = {
        title: blog?.title || 'Blog not found',
        descrition: blog?.description || 'No description found',
        openGraph: {
            images: [] as string[],
            description: blog?.description
        }
    }

    if (blog) {
        metadata.openGraph.images.push(blog.image)
    }

    return metadata
}

export async function generateStaticParams() {
    const blogs = await getAllBlogs()

    return blogs.map(blog => blog.slug)
}

export const revalidate = 60 // FIXME increase revalidation counter for production

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
        author,
        createdAt,
        updatedAt,
        content,
        topics,
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

                    {topics.length > 0 && <TagsAndTopics content={topics}>
                        Topics
                    </TagsAndTopics>}

                    <SocialStats
                        docLikes={likes}
                        docIsLiked={false}
                        id={id}
                        docType={docType}
                        docViews={views}
                    />

                    <Share />

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
                    components={{
                        button: ({ node, ...props }) => {
                            return (
                                <Button>
                                    {props.children}
                                </Button>
                            )
                        },
                        a: ({ node, ...props }) => {
                            if (!props.href) return null

                            return props.href.includes('http') ? (
                                <ExternalLink href={props.href} {...props}>
                                    {props.children}
                                </ExternalLink>
                            ) : (
                                <Link href={props.href} {...props}>
                                    {props.children}
                                </Link>
                            )
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>

                <Signoff author={author} />

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