import { firestore } from "@/util/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataIsBlog } from "./typeCheck";

export async function getAllBlogs() {
    const blogsRef = collection(firestore, 'blogs')

    const q = query(blogsRef, where("draft", "==", false))

    const blogsSnap = await getDocs(q)
    
    const blogs: Blog[] = []

    blogsSnap.forEach(doc => {
        const docData = doc.data()

        if (dataIsBlog(docData)) {
            blogs.push(docData)
        }
    })

    return blogs
}