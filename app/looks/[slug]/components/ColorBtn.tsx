import Image from 'next/image'
import styles from '../page.module.css'
import ExternalLink from '@/components/ExternalLink'
import { capitalize } from '@/lib/capitalize'

export default function ColorBtn({
    color
}: {
    color: Color
}) {
  return (
    <ExternalLink href={color.link} className={styles.color_btn}>
        
        <Image src={color.image} height={76} width={134} alt='' />

        <div className={styles.color_info}>

            <p className={styles.color_name}>
                {color.name}
            </p>

            <p className={styles.color_brand}>
                {capitalize(color.brand)}
            </p>

        </div>

    </ExternalLink>
  )
}