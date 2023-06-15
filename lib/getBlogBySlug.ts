import { firestore } from "@/util/firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { dataIsBlog } from "./typeCheck";

export async function getBlogBySlug(slug: string) {
    try {
        const blogsRef = collection(firestore, 'blogs')

        const q = query(blogsRef, where('slug', '==', slug))

        const blogSnap = await getDocs(q)

        const blog = blogSnap.docs[0].data()
        
        if (blog && dataIsBlog(blog)) {
            return blog
        } else {
            return null
        }
    } catch {
        return null
    }
}