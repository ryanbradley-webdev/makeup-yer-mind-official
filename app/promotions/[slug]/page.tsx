import { getPromoBySlug } from '@/lib/getPromoBySlug'
import Image from 'next/image'
import styles from './page.module.css'
import ExternalLink from '@/components/ExternalLink'

type Params = {
    params: { slug: string }
}

export default async function PromotionBySlug({ params }: Params) {
    const { slug } = params
    const promo = await getPromoBySlug(slug)

    return (
        <main>
            
            {
                promo ?

                <section className={styles.promo}>
                    
                    {
                        !promo.active && <h2>This promotion is no longer active.</h2>
                    }

                    <Image src={promo.image} height={320} width={480} alt='' />

                    <h1>
                        {promo.title}
                    </h1>

                    <h3>
                        {promo.description}
                    </h3>

                    <p>
                        To get started, just click <ExternalLink href={promo.link}>this link</ExternalLink>!
                    </p>

                </section> : 

                <p>
                    No promotion found.
                </p>
            }

        </main>
    )
}