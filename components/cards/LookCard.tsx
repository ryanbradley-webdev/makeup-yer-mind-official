import Image from "next/image"
import styles from './cards.module.css'
import Link from "next/link"

export default function LookCard({
    look
}: {
    look: Look
}) {
    return (
        <Link className={styles.look} href={`/looks/${look.slug}`}>

            <Image src={`/${look.image1}`} width={200} height={240} alt='' />

            <h5>
                {look.title}
            </h5>

        </Link>
    )
}