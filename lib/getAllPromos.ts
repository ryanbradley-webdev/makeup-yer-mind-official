import { firestore } from "@/util/firebase"
import { getDocs, collection } from "firebase/firestore"
import { dataIsPromo } from "./typeCheck"

export async function getAllPromos() {
    const promosRef = collection(firestore, 'promotions')

    const promosSnap = await getDocs(promosRef)

    const activePromos: Promo[] = []
    const pastPromos: Promo[] = []

    promosSnap.forEach(doc => {
        const docData = doc.data()
        if (dataIsPromo(docData)) {
            if (docData.active) {
                activePromos.push(docData)
            } else {
                pastPromos.push(docData)
            }
        }
    })

    return { activePromos, pastPromos }
}