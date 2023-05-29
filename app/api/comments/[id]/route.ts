import { NextResponse } from 'next/server'
import { firestore } from '@/util/firebase'
import { doc, serverTimestamp, addDoc, query, where, getDocs, collection } from 'firebase/firestore'

type Params = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Params) {
    const { id } = params

    try {
        const commentsRef = collection(firestore, 'comments')

        const q = query(commentsRef, where('article-id', '==', id))
        
        const comments: UserComment[] = []

        const commentDocs = await getDocs(q)

        commentDocs.forEach(doc => {
            comments.push(doc.data() as UserComment)
        })

        comments.sort((a: UserComment, b: UserComment) => {
            return b.createdAt.seconds - a.createdAt.seconds
        })
        
        return NextResponse.json({
            comments
        }, {
            status: 200
        })
    } catch (err) {
        return NextResponse.error()
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