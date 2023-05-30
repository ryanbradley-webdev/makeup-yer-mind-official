import React from 'react'

type Params = {
    params: { slug: string }
}

export default function PromotionBySlug({ params }: Params) {
    const { slug } = params

    return (
        <main>
            
            {slug}

        </main>
    )
}