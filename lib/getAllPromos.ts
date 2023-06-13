import { firestore } from "@/util/firebase"
import { getDocs, collection, doc, updateDoc } from "firebase/firestore"
import { dataIsPromo } from "./typeCheck"

export async function getAllPromos() {
    const promosRef = collection(firestore, 'promotions')

    const promosSnap = await getDocs(promosRef)

    const activePromos: Promo[] = []
    const pastPromos: Promo[] = []

    const currentDate = new Date()

    promosSnap.forEach(snap => {
        const docData = snap.data()
        if (dataIsPromo(docData)) {
            if (docData.active) {
                if (docData.expiresAt) {
                    const expirationDate = new Date(docData.expiresAt.seconds * 1000)
                    if (currentDate > expirationDate) {
                        docData.active = false
                        pastPromos.push(docData)
                        const promoRef = doc(promosRef, snap.id)
                        updateDoc(promoRef, { active: false })
                    } else {
                        activePromos.push(docData)
                    }
                } else {
                    activePromos.push(docData)
                }
            } else {
                pastPromos.push(docData)
            }
        }
    })

    return { activePromos, pastPromos }
}