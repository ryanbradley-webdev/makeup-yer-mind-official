import { firestore } from "@/util/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getAllBlogs() {
    const blogsRef = collection(firestore, 'blogs')

    const q = query(blogsRef, where("draft", "==", false))

    const blogsSnap = await getDocs(q)
    
    const blogs: Blog[] = []

    blogsSnap.forEach(doc => {
        blogs.push(doc.data() as Blog)
    })

    return blogs
}