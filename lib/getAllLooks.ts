import { firestore } from "@/util/firebase";
import { collection, getDocs } from "firebase/firestore";
import { dataIsLook } from "./typeCheck";

export async function getAllLooks() {
    const looskRef = collection(firestore, 'looks')

    const looksSnap = await getDocs(looskRef)
    
    const looks: Look[] = []

    looksSnap.forEach(doc => {
        const docData = doc.data()

        if (dataIsLook(docData)) {
            looks.push(docData)
        }
    })

    return looks
}