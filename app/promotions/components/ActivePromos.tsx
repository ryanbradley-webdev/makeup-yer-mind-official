import PromoCard from '@/components/cards/PromoCard'
import { getAllPromos } from '@/lib/getAllPromos'

export default async function ActivePromos() {
    const { activePromos } = await getAllPromos()

    return (
        <>
            {
                activePromos?.length > 0 ?

                activePromos.map(promo => (
                    <PromoCard promo={promo} key={promo.id} />
                )) :
                
                <p>
                    I&apos;m not currently running any promotions, but check back soon! I&apos;m sure I&apos;ll have something you&apos;ll love!
                </p>
            }
        </>
    )
}