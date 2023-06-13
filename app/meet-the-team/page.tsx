import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'

export const metadata = {
    title: 'Makeup Yer Mind | Meet My Team!',
    description: 'Want to know which companies I work with and why? Find out here!'
}

export default function MeetTheTeam() {
    return (
        <main className={styles.main}>

            <section className={styles.section}>

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
                    This is also why I want to be as completely transparent as I possibly can on this site and list the affiliations I do have!
                </p>
                
                <div className={styles.affiliate}>
                    
                    {/* Add Seint Logo here */}
                    
                    <p>
                        <strong>Seint Beauty:</strong> I started using Seint&apos;s products in June of 2021, and got completely obsessed with them and became an artist with Seint Beauty in October of 2021 and it&apos;s been an amazing ride.
                    </p>

                    <p>
                        You can read more about the Seint Artist program here: <Link href='/what-is-a-seint-artist'>What Is A Seint Artist?</Link>
                    </p>

                    <p>
                        Check out Seint&apos;s products <ExternalLink href='https://st-sational-corntee.seintofficial.com/en/shop/office/new-releases'>here!</ExternalLink>
                    </p>

                </div>
                
                <div className={styles.affiliate}>
                    
                    {/* Add City Beauty Logo here */}
                    
                    <p>
                        <strong>City Beauty:</strong> In March of 2023 the kind folks at City Beauty reached out to collaborate with me. I had been using their products since my mom first introduced me to them back in 2007 and I can state from personal experience they are some of the best skincare products on the market!!
                    </p>

                    <p>
                        Check out City Beauty&apos;s products <ExternalLink href='https://aspireiq.go2cloud.org/SH1la'>here!</ExternalLink>
                    </p>

                </div>
                
                <div className={styles.affiliate}>
                    
                    {/* Add Senegence Logo here */}
                    
                    <p>
                        <strong>Senegence:</strong> I became a Senegence distributor in January of 2023 and I love it. I am a lipstick junkie and, when I was introduced to Senegence&apos;s line of no-budge lipstick, I was hooked. These products are amazing and play so nicely with my entire makeup routine. They have a vast array of products and are a trustworthy company.
                    </p>

                    <p>
                        Check out Senegence&apos;s products <ExternalLink href='https://shop.senegence.com/en-us/distributor/804775'>here!</ExternalLink>
                    </p>

                </div>
            
            </section>

        </main>
    )
}