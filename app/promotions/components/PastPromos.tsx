import PromoCard from '@/components/cards/PromoCard'
import { getAllPromos } from '@/lib/getAllPromos'
import { v4 as uuid } from 'uuid'

export default async function PastPromos() {
    const { pastPromos } = await getAllPromos()

    return (
        <>
            {
                pastPromos?.length > 0 ?

                pastPromos.map(promo => (
                    <PromoCard promo={promo} key={uuid()} />
                )) :

                <p>
                    No past promotions
                </p>
            }
        </>
    )
}