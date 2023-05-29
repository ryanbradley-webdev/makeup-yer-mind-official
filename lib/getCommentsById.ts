import { firestore } from "@/util/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export const getCommentsById = async ( id: string ) => {
    try {
        const commentsRef = collection(firestore, 'comments')

        const q = query(commentsRef, where('articleId', '==', id))
        
        const comments: UserComment[] = []

        const commentDocs = await getDocs(q)

        commentDocs.forEach(doc => {
            comments.push(doc.data() as UserComment)
        })

        comments.sort((a: UserComment, b: UserComment) => {
            return b.createdAt.seconds - a.createdAt.seconds
        })

        return comments
    } catch (err) {
        throw new Error()
    }
}