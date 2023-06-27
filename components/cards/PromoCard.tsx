import Link from 'next/link'
import Image from 'next/image'
import styles from './cards.module.css'

export default function PromoCard({
    promo
}: {
    promo: Promo
}) {
    const truncateDescription = () => {
        if (promo.description.length > 70) {
            const spaceIdx = promo.description.indexOf(' ', 70)

            return promo.description.slice(0, spaceIdx) + '...'
        }

        return promo.description
    }

    return (
        <Link href={`/promotions/${promo.slug}`} className={styles.promo}>
        
            <Image src={promo.image} height={320} width={480} alt='' />

            <div>

                <h5>
                    {promo.title}
                </h5>

                <h6>
                    {truncateDescription()}
                </h6>

            </div>

        </Link>
    )
}