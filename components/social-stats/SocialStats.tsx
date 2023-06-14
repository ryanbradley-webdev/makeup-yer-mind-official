'use client'

import { useEffect, useState } from 'react'
import LikesIcon from '../icons/LikesIcon'
import ViewsIcon from '../icons/ViewsIcon'
import styles from './socialStats.module.css'
import { getPageStats } from '@/lib/getPageStats'

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
    const [views, setViews] = useState(docViews || 0)
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
                setLikes(prevLikes => {
                    return isLiked ? prevLikes - 1 : prevLikes + 1
                })
                setIsLiked(!isLiked)
            }
        } catch {
            return
        }
    }

    useEffect(() => {
        getPageStats(id, docType).then(stats => {
            setViews(stats.views)
            setLikes(stats.likes)
        })
    }, [id, docType])

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