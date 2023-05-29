'use client'

import { getCommentsById } from '@/lib/getCommentsById'
import CommentForm from './CommentForm'
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from 'react'

export default function Comments({
    id,
    className,
}: {
    id: string,
    className: string
}) {
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
        <section className={className}>

            <h4>
                Comments:
            </h4>

            <CommentForm docId={id} setAddingComment={setAddingComment} />

            {
                comments.length > 0 ?

                comments.map(comment => <p key={uuid()}>{comment.comment}</p>) :

                <p>
                    Be the first to comment!
                </p>
            }

        </section>
    )
}