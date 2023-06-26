import { getPromoBySlug } from '@/lib/getPromoBySlug'
import Image from 'next/image'
import styles from './page.module.css'
import ExternalLink from '@/components/ExternalLink'
import { Metadata } from 'next/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPromos } from '@/lib/getAllPromos'

type Params = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Params,
): Promise<Metadata> {
    const { slug } = params

    const promo = await getPromoBySlug(slug)

    const metadata = {
        title: promo?.title || 'Promotion not found',
        description: promo?.description || 'Promotion not found',
        openGraph: {
            images: [] as string[],
            description: promo?.description
        }
    }

    if (promo) {
        metadata.openGraph.images.push(promo.image)
    }

    return metadata
}

export async function generateStaticParams() {
    const { activePromos, pastPromos } = await getAllPromos()

    return [ ...activePromos, ...pastPromos ].map(promo => promo.slug)
}


export default async function PromotionBySlug({ params }: Params) {
    const { slug } = params
    const promo = await getPromoBySlug(slug)

    if (!promo) {
        notFound()
    }

    const {
        title,
        image,
        description,
        link,
        active,
        expiresAt
    } = promo

    const generateLink = () => {
        return link.includes('http') ? (
            <ExternalLink href={link}>
                this link
            </ExternalLink>
        ) : (
            <Link href={link}>
                this link
            </Link>
        )
    }

    return (
        <main className={styles.main}>
            
            <section className={styles.promo}>
                
                {
                    !active && <h2>This promotion is no longer active.</h2>
                }

                <h1>
                    {title}
                </h1>

                <Image src={image} height={320} width={480} alt='' />

                {
                    active && expiresAt && (
                        <p className={styles.expiration}>
                            Active until {new Date(expiresAt.seconds * 1000).toLocaleDateString()}
                        </p>
                    )
                }

                <p className={styles.paragraph}>
                    {description}
                </p>

                <p className={styles.paragraph}>
                    To get started, just click {generateLink()}!
                </p>

            </section>

        </main>
    )
}