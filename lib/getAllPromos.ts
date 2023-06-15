import { firestore } from "@/util/firebase"
import { getDocs, collection, doc, updateDoc } from "firebase/firestore"
import { dataIsPromo } from "./typeCheck"

export async function getAllPromos() {
    const promos: {
        activePromos: Promo[],
        pastPromos: Promo[]
    } = {
        activePromos: [],
        pastPromos: []
    }

    try {
        const promosRef = collection(firestore, 'promotions')

        const promosSnap = await getDocs(promosRef)

        const currentDate = new Date()

        promosSnap.forEach(snap => {
            const docData = snap.data()
            if (dataIsPromo(docData)) {
                if (docData.active) {
                    if (docData.expiresAt) {
                        const expirationDate = new Date(docData.expiresAt.seconds * 1000)
                        if (currentDate > expirationDate) {
                            docData.active = false
                            promos.pastPromos.push(docData)
                            const promoRef = doc(promosRef, snap.id)
                            updateDoc(promoRef, { active: false })
                        } else {
                            promos.activePromos.push(docData)
                        }
                    } else {
                        promos.activePromos.push(docData)
                    }
                } else {
                    promos.pastPromos.push(docData)
                }
            }
        })

        return promos
    } catch {
        return promos
    }
}