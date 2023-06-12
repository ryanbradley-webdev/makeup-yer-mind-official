import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
    title: 'Makeup Yer Mind | Meet My Team!',
    description: 'Want to know which companies I work with and why? Find out here!'
}

export default function MeetTheTeam() {
    return (
        <main className={styles.main}>
            
            <section className={styles.section}>

                <h2>
                    Affiliations:
                </h2>

                <p>
                    <strong>This blogsite was created to share products that I actually use and believe in.</strong> And while I have some affiliations, if I find something I like better you&apos;ll know about it! You will never catch me promoting something for the sole purpose of making a sale.
                </p>

                <p>
                    This is my promise to you.
                </p>

                <p>
                    This is also why I haven&apos;t finished writing this section yet.
                </p>
            
            </section>

            <section className={styles.section}>

                <h2>
                    My team:
                </h2>

                <div className={styles.profile}>

                    <Image src='/steve.webp' width={800} height={1200} alt='' />

                    <h3>
                        Steve
                    </h3>

                    <p>
                        Hailing from Brooklyn, NY, Steve has been passionate about makeup from a very early age. He joined my team in late 2021 and has become my go-to person for any and all advice!
                    </p>

                </div>

                <div className={styles.profile}>

                    <Image src='/jeff.jpg' width={512} height={288} alt='' />

                    <h3>
                        Jeff
                    </h3>

                    <p>
                        A member of the local cartel (shhh! He&apos;s undercover), Jeff brings a whole new personality to the team. Although his exterior is tough and rugged, he&apos;s actually a huge softie!
                    </p>

                </div>

                <div className={styles.profile}>

                    <Image src='/chris.gif' width={331} height={280} alt='' />

                    <h3>
                        Chris
                    </h3>

                    <p>
                        Gone too young, Chris was an irreplaceable member of the team. Unfortunately, his soul was lost to copious amounts of cocaine and amphetamines. Still, his presence is felt every day and he will always be remembered as a core member of my community!
                    </p>

                </div>

                <div className={styles.profile}>

                    <Image src='/barack.jpg' width={1024} height={683} alt='' />

                    <h3>
                        B-dawg
                    </h3>

                    <p>
                        After struggling through an unsuccessful career in politics (ew, gross!), Barack reached out to join my team in 2017 shortly after losing his previous job. Since then, he&apos;s proven himself INVALUABLE to the growth of my community! His message of positivity and hope is one that has shaped this community over the last several years, and I know you&apos;ll come to love his influence! As a final note, I&apos;ll leave you with his famous saying: &quot;Make America Great Again!&quot;
                    </p>

                </div>

            </section>

        </main>
    )
}