import Image from "next/image"
import styles from './cards.module.css'
import Link from "next/link"

export default function LargeLookCard({
    look
}: {
    look: Look
}) {
    return (
        <Link className={styles.first_look} href={`/looks/${look.slug}`}>

            <Image src={look.image1} height={646} width={550} alt='' />
            <Image src={look.image2} height={646} width={550} alt='' />

            <div className={styles.card_info}>

                <h5>
                    {look.title}
                </h5>

                <div className={styles.colors}>

                    {/* {look.colors.map(color => (
                        <Image src={`/${color}.PNG`} height={20} width={36} alt='' key={Math.floor(Math.random() * 100000)} />
                    ))} */}

                </div>

                <h6>
                    {look.description}
                </h6>

            </div>

        </Link>
    )
}