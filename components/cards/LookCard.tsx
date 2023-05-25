import Image from "next/image"
import styles from './cards.module.css'

export default function LookCard({
    look
}: {
    look: Look
}) {
    return (
        <div className={styles.look}>

            <Image src={`/${look.image1}`} width={200} height={240} alt='' />

            <h5>
                {look.title}
            </h5>

        </div>
    )
}