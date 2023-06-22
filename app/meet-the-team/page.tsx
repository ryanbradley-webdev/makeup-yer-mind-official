import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import Seint from './components/Seint'
import Socials from './components/Socials'
import User from '@/components/icons/User'
import Podcast from '@/components/icons/Podcast'

export const metadata = {
    title: 'Makeup Yer Mind | Meet My Team!',
    description: 'Want to know which companies I work with and why? Find out here!'
}

export default function MeetTheTeam() {
    return (
        <main className={styles.main}>

            <section className={styles.section}>

                <div className={styles.profile}>

                    <Image src='/team-photo-courtney.png' width={800} height={1200} alt='' />

                    <div>

                        <h3>
                            Courtney Holly (Baumann) <span>- Founder</span>
                        </h3>

                        <p>
                            Courtney is a professionally trained Actress, Voiceover Artist, Makeup Artist, Podcast Host and SFX Makeup Artist based in Nashville, Tennessee.
                        </p>

                        <p>
                            Her passion for sharing her knowledge of the beauty industry and being the support that others need to truly believe they are beautiful was the driving force behind the founding of Makeup Yer Mind. Her main goal is to create a safe space for anyone and everyone to learn the in&apos;s and out&apos;s of the beauty industry while also fostering a positive and supportive environment.
                        </p>

                        <p>
                            When she&apos;s not writing blogs, creating videos, performing or hosting you can find her spending time with her family, playing videogames and giving her dog Tessa an obscene amount of snuggles!
                        </p>

                        <Socials
                            link='https://instagram.com/ohcorntee/'
                        >
                            <ExternalLink
                                href='https://courtneyholly.com'
                            >

                                <User />

                                Portfolio

                            </ExternalLink>

                            <ExternalLink
                                href='https://sightsandsoundscollective.com'
                            >

                                <Podcast />

                                Sights and Sounds Collective
                                
                            </ExternalLink>

                        </Socials>

                    </div>

                </div>

                <div className={styles.profile}>

                    <Image src='/team-photo-tara.jpg' width={800} height={1200} alt='' />

                    <div>

                        <h3>
                            Tara Andersen <span>- Associate Blogger</span>
                        </h3>

                        <p>
                            Tara is a Quality Control Microbiologist for a pharmaceutical company by day, and a spiritual bold makeup lover by night.
                        </p>

                        <p>
                            While she has always been a creative person, makeup has given Tara a new outlet to express herself while finding a new passion! Teaching people makeup has no rules, and how to incorporate manifestation and affirmations into your beauty routine.
                        </p>

                        <p>
                            Working for a pharmaceutical company, Tara has an insider view of the Beauty industry and requirements of &quot;Clean Beauty&quot;. When she&apos;s not at work dealing with the FDA, you can find Tara watching horror movies, spoiling her cats and dog, or maybe galavanting in another country.
                        </p>

                        <Socials
                            link='https://instagram.com/wickedbeauty_taralynn/'
                        />

                    </div>

                </div>

                <div className={styles.profile}>

                    <Image src='/team-photo-malina.jpg' width={800} height={1200} alt='' />

                    <div>

                        <h3>
                            Malina Roiati <span>- Associate Blogger</span>
                        </h3>

                        <p>
                            Malina is a Licensed Esthetician, Certified Makeup Artist and self-taught Eyelash Extension Technician who is currently living and working in the Daytona Beach, Florida area.
                        </p>

                        <p>
                            She has spent the last ten years using her knowledge in the industry to help people exude on the outside the true beauty that lies within each of them. She now wishes to expand her reach beyond just her clients. Her goal is to help everyone realize just how fun, simple and rewarding self-care can be while also helping them learn to successfully navigate the professional beauty industry as a client.
                        </p>

                        <p>
                            When she&apos;s not working in the salon you can find her enjoying time with her family, refurbishing furniture, playing with her three fur babies and writing her novel that she WILL eventually finish... Someday!
                        </p>

                        <Socials
                            link='https://instagram.com/dashing.beautys.insta/'
                        />

                    </div>

                </div>

            </section>
            
            <section className={styles.section}>

                <h2>
                    Affiliations
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

                <div className={styles.affiliate_container}>
                
                    <div className={styles.affiliate}>
                        
                        <Seint />

                        <div>
                            
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

                    </div>
                    
                    <div className={styles.affiliate}>

                        <Image src='/city-beauty-logo.png' width={243} height={105} alt='City Beauty' />

                        <div>
                        
                            <p>
                                <strong>City Beauty:</strong> In March of 2023 the kind folks at City Beauty reached out to collaborate with me. I had been using their products since my mom first introduced me to them back in 2007 and I can state from personal experience they are some of the best skincare products on the market!!
                            </p>

                            <p>
                                Check out City Beauty&apos;s products <ExternalLink href='https://aspireiq.go2cloud.org/SH1la'>here!</ExternalLink>
                            </p>

                        </div>

                    </div>
                    
                    <div className={styles.affiliate}>
                        
                        <Image src='/senegence-logo.png' width={243} height={290} alt='Senegence' />

                        <div>
                            
                            <p>
                                <strong>Senegence:</strong> I became a Senegence distributor in January of 2023 and I love it. I am a lipstick junkie and, when I was introduced to Senegence&apos;s line of no-budge lipstick, I was hooked. These products are amazing and play so nicely with my entire makeup routine. They have a vast array of products and are a trustworthy company.
                            </p>

                            <p>
                                Check out Senegence&apos;s products <ExternalLink href='https://shop.senegence.com/en-us/distributor/804775'>here!</ExternalLink>
                            </p>

                        </div>

                    </div>

                </div>
            
            </section>

        </main>
    )
}