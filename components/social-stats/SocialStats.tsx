'use client'

import { useState } from 'react'
import LikesIcon from '../icons/LikesIcon'
import ViewsIcon from '../icons/ViewsIcon'
import styles from './socialStats.module.css'

export default function SocialStats({
    views,
    docLikes,
    docIsLiked,
    id,
    docType
}: {
    views: number,
    docLikes: number,
    docIsLiked: boolean
    id: string,
    docType: string
}) {
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