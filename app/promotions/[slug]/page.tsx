import { getPromoBySlug } from '@/lib/getPromoBySlug'
import React from 'react'

type Params = {
    params: { slug: string }
}

export default async function PromotionBySlug({ params }: Params) {
    const { slug } = params
    const promo = await getPromoBySlug(slug)

    return (
        <main>
            
            {promo?.title}

        </main>
    )
}