import { firestore } from "@/util/firebase";
import { getDoc, doc } from "firebase/firestore";

export async function getLookById(id: string) {
    const lookRef = doc(firestore, 'looks', id)
    const lookSnap = await getDoc(lookRef)
    
    if (lookSnap.exists()) {
        return lookSnap.data()
    } else {
        console.log('firestore error')
        throw new Error()
    }
}