import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../Button'
import Link from 'next/link'
import LargeLookCard from '../cards/LargeLookCard'
import LookCard from '../cards/LookCard'
import { getAllLooks } from '@/lib/getAllLooks'

export default async function LooksSection() {
    const looks = await getAllLooks()

    return (
        <section id='looks' className={styles.section}>

            <SectionHeader>
                Find a New Look
            </SectionHeader>

            <div className={styles.looks_grid}>

                <div className={styles.grid}>

                    <LargeLookCard look={looks[0]} />

                    <div className={styles.btnDiv}>

                        <Link href={`/looks/${looks[0].slug}`}>
                            <Button>
                                Read More
                            </Button>
                        </Link>

                        <Link href='/looks'>
                            <Button variant='solid'>
                                All Looks
                            </Button>
                        </Link>

                    </div>
                    
                </div>

                <div className={styles.grid}>

                    {looks && looks.map((look, idx) => {
                        if (idx === 0 || idx > 4) return
                        return <LookCard look={look} key={look.id} />
                    })}

                </div>

                <div className={styles.btnDiv}>

                    <Link href='/looks'>
                        <Button variant='solid'>
                            See the rest of my looks!
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    )
}