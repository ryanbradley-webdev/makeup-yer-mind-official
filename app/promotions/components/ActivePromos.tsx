import PromoCard from '@/components/cards/PromoCard'
import { getAllPromos } from '@/lib/getAllPromos'
import { v4 as uuid } from 'uuid'

export default async function ActivePromos() {
    const { activePromos } = await getAllPromos()

    return (
        <>
            {
                activePromos?.length > 0 ?

                activePromos.map(promo => (
                    <PromoCard promo={promo} key={uuid()} />
                )) :
                
                <p>
                    No active promotions
                </p>
            }
        </>
    )
}