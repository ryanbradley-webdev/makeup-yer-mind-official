import { NextResponse } from 'next/server'
import { firestore } from '@/util/firebase'
import { serverTimestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore'

type Params = {
    params: {
        id: string
    }
}

export async function PATCH(request: Request, { params }: Params) {
    const { id } = params
    const { 
        commentCount,
        docType
    }: { 
        commentCount: string | number,
        docType: string
    } = await request.json()

    if (Number(commentCount) < 0 || !commentCount || !docType) {
        return NextResponse.json({
            error: 'invalid parameters'
        }, {
            status: 400
        })
    }

    try {
        const docRef = doc(firestore, docType, id)

        await updateDoc(docRef, {
            comments: Number(commentCount) + 1
        })

        return NextResponse.json({
            message: 'Comment count updated'
        }, { 
            status: 200 
        })
    } catch {
        console.log('error')
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
            articleId: id,
            docType: 'comment'
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