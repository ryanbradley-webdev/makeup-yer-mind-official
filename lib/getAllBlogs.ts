import { firestore } from "@/util/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataIsBlog } from "./typeCheck";

export async function getAllBlogs() {
    const blogs: Blog[] = []
    
    try {
        const blogsRef = collection(firestore, 'blogs')

        const q = query(blogsRef, where("draft", "==", false))

        const blogsSnap = await getDocs(q)

        blogsSnap.forEach(doc => {
            const docData = doc.data()

            if (dataIsBlog(docData)) {
                blogs.push(docData)
            }
        })

        return blogs.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
    } catch {
        return []
    }
}