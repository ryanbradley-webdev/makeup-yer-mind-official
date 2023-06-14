import PromoCard from '@/components/cards/PromoCard'
import { getAllPromos } from '@/lib/getAllPromos'

export default async function PastPromos() {
    const { pastPromos } = await getAllPromos()

    return (
        <>
            {
                pastPromos?.length > 0 ?

                pastPromos.map(promo => (
                    <PromoCard promo={promo} key={promo.id} />
                )) :

                <p>
                    I don&apos;t have any past promotions at the moment.
                </p>
            }
        </>
    )
}