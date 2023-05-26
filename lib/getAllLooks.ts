import { firestore } from "@/util/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getAllLooks() {
    const looskRef = collection(firestore, 'looks')

    const looksSnap = await getDocs(looskRef)
    
    const looks: Look[] = []

    looksSnap.forEach(doc => {
        looks.push(doc.data() as Look)
    })

    return looks
}