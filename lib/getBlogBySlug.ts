import { firestore } from "@/util/firebase";
import { getDocs, collection, where, query } from "firebase/firestore";

export async function getBlogBySlug(slug: string) {
    const blogsRef = collection(firestore, 'blogs')

    const q = query(blogsRef, where('slug', '==', slug))

    const blogSnap = await getDocs(q)

    const blog = blogSnap.docs[0].data()
    
    if (blog) {
        return blog as Blog
    } else {
        return null
    }
}