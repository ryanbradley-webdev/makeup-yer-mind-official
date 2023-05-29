'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Button from "../Button"

export default function CommentForm({
    docId,
    setAddingComment
}: {
    docId: string,
    setAddingComment: Dispatch<SetStateAction<boolean>>
}) {

    const [commentSending, setCommentSending] = useState(false)
    const [commentSuccess, setCommentSuccess] = useState(false)
    const [commentError, setCommentError] = useState(false)
    const [btnMsg, setBtnMsg] = useState('Submit')

    const formRef = useRef<HTMLFormElement>(null)
    const commentRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!commentRef?.current?.value) return

        setAddingComment(true)
        setCommentError(false)
        setCommentSending(true)

        const newComment = commentRef.current.value

        try {
            const res = await fetch(`/api/comments/${docId}`, {
                method: 'POST',
                body: JSON.stringify({
                    newComment
                })
            })

            setAddingComment(false)
            setCommentSending(false)

            if (res.ok) {
                setCommentSuccess(true)
                if (formRef.current) formRef.current.reset()
            } else {
                setCommentError(true)
            }
        } catch {
            setCommentSending(false)
            setCommentError(true)
        }
    }

    useEffect(() => {
        if (commentSending) {
            setBtnMsg('Posting your comment...')
        } else if (commentSuccess) {
            setBtnMsg('Comment Added!')
        } else if (commentError) {
            setBtnMsg('Something went wrong. Retry?')
        } else {
            setBtnMsg('Submit')
        }
    }, [commentSending, commentSuccess, commentError])

    return (
        <form action='' onSubmit={handleSubmit}ref={formRef}>

            <label htmlFor="comment">
                <span>Add to the conversation!</span>
                <input
                    type="text"
                    name="comment"
                    id="comment"
                    ref={commentRef}
                    disabled={commentSuccess}
                    required
                />
            </label>

            <Button
                variant="ghost"
                aria-label="Add Comment"
                disabled={commentSending || commentSuccess}
            >
                {btnMsg}
            </Button>

        </form>
    )
}