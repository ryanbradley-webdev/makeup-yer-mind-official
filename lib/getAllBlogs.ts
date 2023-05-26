import { firestore } from "@/util/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getAllBlogs() {
    const blogsRef = collection(firestore, 'blogs')

    const blogsSnap = await getDocs(blogsRef)
    
    const blogs: Blog[] = []

    blogsSnap.forEach(doc => {
        blogs.push(doc.data() as Blog)
    })

    return blogs
}