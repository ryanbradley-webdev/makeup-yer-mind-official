'use client'

import { useEffect } from 'react'
import { firestore } from '@/util/firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default function IncrementPageViews({
    id,
    docType,
    docViews
}: {
    id: string,
    docType: string,
    docViews: number
}) {
    useEffect(() => {
        const docRef = doc(firestore, `${docType}s`, id)

        updateDoc(docRef, { views: docViews + 1 })
    }, [id, docType, docViews])

    return (
        <div></div>
    )
}