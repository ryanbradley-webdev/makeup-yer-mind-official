import { firestore } from "@/util/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataIsLook } from "./typeCheck";

export async function getAllLooks() {
    const looks: Look[] = []

    try {
        const looskRef = collection(firestore, 'looks')

        const q = query(looskRef, where("draft", "==", false))

        const looksSnap = await getDocs(q)
        
        looksSnap.forEach(doc => {
            const docData = doc.data()

            if (dataIsLook(docData)) {
                looks.push(docData)
            }
        })

        return looks.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
    } catch {
        return []
    }
}