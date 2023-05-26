import { firestore } from "@/util/firebase";
import { getDoc, doc } from "firebase/firestore";

export async function getBlogById(id: string) {
    const blogRef = doc(firestore, 'blogs', id)
    const blogSnap = await getDoc(blogRef)
    
    if (blogSnap.exists()) {
        return blogSnap.data()
    } else {
        console.log('firestore error')
        throw new Error()
    }
}