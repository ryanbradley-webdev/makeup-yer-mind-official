'use client'

import { useEffect, useState } from 'react'
import LikesIcon from '../icons/LikesIcon'
import ViewsIcon from '../icons/ViewsIcon'
import styles from './socialStats.module.css'
import { doc, onSnapshot } from 'firebase/firestore'
import { firestore } from '@/util/firebase'

export default function SocialStats({
    docViews,
    docLikes,
    docIsLiked,
    id,
    docType
}: {
    docViews: number,
    docLikes: number,
    docIsLiked: boolean
    id: string,
    docType: string
}) {
    const [views, setViews] = useState(docViews + 1 || 0)
    const [likes, setLikes] = useState(docLikes || 0)
    const [isLiked, setIsLiked] = useState(docIsLiked)

    const handleClick = async () => {
        if (!id || !docType) {
            return
        }

        try {
            const res = await fetch(`/api/${docType}s/toggle-like`, {
                method: 'PATCH',
                body: JSON.stringify({
                    id,
                    likes,
                    isLiked
                })
            })

            if (res.ok) {
                setIsLiked(!isLiked)
            }
        } catch {
            return
        }
    }

    useEffect(() => {
        const docRef = doc(firestore, `${docType}s`, id)

        const unsubscribe = onSnapshot(docRef, document => {
            const docData = document.data()

            if (docData) {
                const likesData = docData.likes
                const viewsData = docData.views

                if (likesData !== likes) {
                    setLikes(likesData)
                    
                    if (likesData < likes) {
                        setIsLiked(false)
                    } else {
                        setIsLiked(true)
                    }
                }

                if (viewsData !== views) {
                    setViews(viewsData)
                }
            }
            
        })

        return () => unsubscribe()
    }, [views, likes, docType, id])

    return (
        <div className={styles.social_stats}>
            
            <div className={styles.stat_div}>

                <ViewsIcon />

                <span>
                    {views}
                </span>

            </div>

            <div className={styles.stat_div}>

                <button
                    onClick={handleClick}
                    className={styles.like_btn}
                >
                    <LikesIcon isLiked={isLiked} />
                </button>

                <span>
                    {likes}
                </span>

            </div>

        </div>
    )
}