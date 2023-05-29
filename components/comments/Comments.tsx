'use client'

import { getCommentsById } from '@/lib/getCommentsById'
import CommentForm from './CommentForm'
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from 'react'
import styles from './comments.module.css'
import { convertServerTimestamp } from '@/lib/convertServerTimestamp'

export default function Comments({ id }: { id: string }) {
    const [comments, setComments] = useState<UserComment[]>([])
    const [addingComment, setAddingComment] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const data = await getCommentsById(id)
            setComments(data)
            setAddingComment(false)
        }

        if (!addingComment) fetchData()
    }, [id, addingComment])

    return (
        <section className={styles.section}>

            <h4>
                Comments
            </h4>

            <CommentForm docId={id} setAddingComment={setAddingComment} />

            <div className={styles.comment_container}>

                {
                    comments.length > 0 ?

                    comments.map(comment => (
                        <div key={uuid()} className={styles.comment}>
                            <span>{comment.comment}</span>
                            <span>{convertServerTimestamp(comment.createdAt, undefined)}</span>
                        </div>
                    )) :

                    <p>
                        Be the first to comment!
                    </p>
                }

            </div>

        </section>
    )
}