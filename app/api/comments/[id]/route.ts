import { NextResponse } from 'next/server'
import { firestore } from '@/util/firebase'
import { doc, serverTimestamp, addDoc, query, where, getDocs, collection } from 'firebase/firestore'

type Params = {
    params: {
        id: string
    }
}

export async function POST(request: Request, { params }: Params) {
    const { id } = params
    const { newComment }: { newComment: string } = await request.json()

    if (!newComment) {
        return NextResponse.json({
            error: 'no comment supplied'
        }, {
            status: 400
        })
    }

    try {
        const commentsRef = collection(firestore, 'comments')

        const commentDoc: UserComment = {
            comment: newComment,
            createdAt: serverTimestamp(),
            articleId: id
        }

        const doc = await addDoc(commentsRef, commentDoc)

        if (doc.id) {
            return NextResponse.json(null, {
                status: 200
            })
        } else {
            return NextResponse.json({
                error: 'failed to add comment'
            }, {
                status: 500
            })
        }
    } catch (error) {
        return NextResponse.json({
            error: 'an error occured'
        }, {
            status: 500
        })
    }
}