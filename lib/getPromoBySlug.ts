import { firestore } from "@/util/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataIsPromo } from "./typeCheck";

export async function getPromoBySlug(slug: string) {
    try {
        const promosRef = collection(firestore, 'promotions')

        const q = query(promosRef, where('slug', '==', slug))

        const promosSnap = await getDocs(q)

        const promo = promosSnap.docs[0].data()

        if (promo && dataIsPromo(promo)) {
            return promo
        } else {
            return null
        }
    } catch {
        return null
    }
}