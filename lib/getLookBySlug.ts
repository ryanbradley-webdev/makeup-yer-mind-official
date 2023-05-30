import { firestore } from "@/util/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { dataIsLook } from "./typeCheck"

export async function getLookBySlug(slug: string) {
    const looksRef = collection(firestore, 'looks')

    const q = query(looksRef, where('slug', '==', slug))

    const lookSnap = await getDocs(q)

    const look = lookSnap.docs[0].data()
    
    if (look && dataIsLook(look)) {
        return look
    } else {
        return null
    }
}