import Link from 'next/link'
import styles from './page.module.css'
import Glossary from './components/Glossary'
import Button from '../../components/Button'
import ExternalLink from '../../components/ExternalLink'
import ImgCarousel from './components/ImgCarousel'
import Image from 'next/image'
import Signoff from '../../components/Signoff'
// import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata = {
    title: 'What is a Seint Artist, anyway?',
    description: 'What is the Seint Artist Program, and is it worth it?'
}

export default function WhatIsASeintArtist() {
    return (
        <main className={styles.main}>

            <div className={styles.header}>
            
                <section className={styles.intro}>

                    <Image src='/seint-logo-large.png' height={476} width={900} alt='Seint Artist Program' />

                    <h1>
                        What is a Seint Artist, anyway?
                    </h1>

                    <p>
                        My dearest readers (please read this entire post in the Lady Whistledown voice, k?),
                    </p>

                    <p>
                        While I am still hastily writing/filming the color correction post and video there are some products I&apos;m ordering to really help give a full educational experience to that entry so I do apologize for it taking longer than the typical post. 
                    </p>

                    <p>
                        However, I&apos;ve been getting quite a few people asking about the Seint Artist Program, and I thought that doing a quick writeup about the program and my experiences with it thus far would benefit a lot of you who have been curious about it. I&apos;m going to try to write this in as much of an unbiased headspace as possible because is this for everyone? No. I want to be detailed and answer as many questions as possible (especially because I had so many when I first started) so that anyone who stumbles upon this post can make a truly informed decision. 
                    </p>

                    <p>
                        So with that, let&apos;s dive in!
                    </p>

                </section>

                <aside>

                    <h3>
                        Looking for just some quick info without reading the whole article?
                    </h3>

                    <h3>
                        <a href='#video'>
                            Watch a quick video here!
                        </a>
                    </h3>

                </aside>

                <Button>
                    Join Courtney&apos;s Team!
                </Button>

            </div>

            <Glossary />

            <section id='what-is-the-seint-artist-program' className={styles.section}>

                <h2>
                    What is the Seint Artist Program?
                </h2>

                <p>
                    <ExternalLink href='https://st-sational-corntee.seintofficial.com/en/about'>Seint</ExternalLink> (formerly Maskcara) Beauty is centralized around the idea that &quot;helping others look beautiful is nice, but helping them believe they are beautiful is life-changing.&quot;
                </p>

                <p>
                    As a Seint Artist you are given the opportunity to work one-on-one with your clients to help them highlight their own natural beauty. As an artist you become a catalyst for self-expression, an envoy of illumination. 
                </p>

                <p>
                    You form a unique bond with your clients as you guide them, and they become like family. This is what makes being a Seint Artist so different from other companies. 
                </p>

                <h5>
                    It&apos;s not about just making a sale, it&apos;s about connection.
                </h5>

                <p>
                    That said, Seint created the Artist Program to provide those who resonate with their vision an opportunity to make a living with a product they already know and love; while also providing a truly unique experience. Rather than putting it on store shelves (which they were offered and turned it down) where customers wouldn&apos;t get the true attention they deserve; the Artist Program insures that customers will be cared for on a personal level. They are not a number on a spreadsheet. They are a wonderfully unique person who deserves undivided attention to help them highlight their natural beauty. That is what being a Seint Artist is about.  The artist program is currently available to those in the US and Canada.
                </p>

                <Image src='/mission-statement.png' height={1422} width={800} alt='Seint Mission Statement' />

            </section>

            <section id="isnt-seint-an-mlm" className={styles.section}>

                <h2>
                    Isn&apos;t Seint an MLM? I Have No Interest in Becoming a &quot;Hey Girl&quot;...
                </h2>

                <p>
                    PREACH!! Believe me this was exactly my reason for hesitating in the very beginning. I heard MLM and cringed. We&apos;ve all gotten that &quot;hey girl&quot; message from someone we haven&apos;t talked to since middle school, and it&apos;s indicative of poor business practice.
                </p>

                <p>
                    <em>
                        Seint is nothing like that. In fact, they&apos;re trying to CHANGE the way direct sales is viewed!
                    </em>
                </p>

                <p>
                    <strong>Seint highly discourages soliciting, so much so it&apos;s against our Artist Contracts!!!</strong> If you use the product, you know that there&apos;s absolutely nothing out there like it, it truly speaks for itself. Seint never wants you to be an MLM nightmare. Which is why they never pressure you to make minimum sales, they never pressure you to build a team. Reaching out to someone you haven&apos;t talked to since middle school is a HUGE no no with Seint.  When I realized that Seint was different and nothing like most MLM companies... that&apos;s when I seriously started considering it.
                </p>

                <p>
                    <em>
                        You will never be a &quot;Hey girl&quot;  with Seint and I&apos;ll personally help you make sure of that!
                    </em>
                </p>

            </section>

            <section id="im-not-a-makeup-artist" className={styles.section}>

                <h2>
                    I&apos;m Not a Makeup Artist, Could I Still Be a Seint Artist?
                </h2>

                <p>
                    Yes of course! You do not need to be a professional makeup artist in order to enroll! In fact, Seint encourages people of all backgrounds to become Artists! While it&apos;s always impressive to see that super talented Makeup Artist creating jaw-dropping looks... it&apos;s far more compelling to see that busy mama doing her makeup flawlessly in 5 minutes or the hardworking college student making tuition money with makeup!
                </p>

                <p>
                    Plus, Seint has incredible training resources and an even more amazing support system! You will never be alone in this! Help is always a message away and if you&apos;re an artist through me I will be mentoring you every single step of the way! &#60;3
                </p>

            </section>

            <section id='do-i-have-to-pay-for-anything' className={styles.section}>

                <h2>
                    Do I Have to Pay for Anything?
                </h2>

                <p>
                    There are two instances that you will make a purchase or pay a fee, <strong>but don&apos;t let that spook you!</strong>
                </p>

                <ol>

                    <li>

                        <p>
                            The first instance a (ONE TIME ONLY)  purchase of your Artist Kit, of which there are three options.
                        </p>
                        
                        <ul>

                            <li>The Essentials Kit: $99 USD/ $139 CAN</li>
                            <li>The Basic Artist Kit: $225 USD/$315 CAN (Approx. $476 USD retail value!)</li>
                            <li>The Pro Artist Kit: $450 USD/ $630 CAN (Approx. $900 retail value!)*</li>

                        </ul>

                        <p>
                            <em>
                                *Currently only the Basic Kit is offered in Canada.
                            </em>
                        </p>

                        <p>
                            The kits are an incredible deal and are necessary in order for artists to do in-person color matches for customers.  On a personal note: I&apos;ve used my kit more often than I ever thought I would, to really see the different colors up close and how they mix with one another. This has ensured that I make a perfect match to my client&apos;s skin tone in person or online.
                        </p>

                    </li>

                    <a href='#cheat-code'>
                        See this section for how you can pay in 4 interest free installments.
                    </a>

                    <li>
                        A $12.99/month Back Office Fee. Each artist is equipped with a unique web address, so that customer orders are directly linked to them. This along with your Back Office Analytics is critical to your sales. However, this is a small price to pay as Seint handles all customer service, returns/exchanges, shipping & fulfillment for you!
                    </li>

                </ol>

            </section>

            <section id='difference-between-kits' className={styles.section}>

                <h2>
                    What is the Difference Between the Three Kits?
                </h2>

                <p>
                    The three kits are totally a personal preference! Two of them offer more product and is perfect for the Artist who is planning to do a lot of in-person color matches. The other is geared toward those who don&apos;t necessarily want to do color matches in person right away and have already been using the products.
                </p>

                <ImgCarousel />

            </section>

            <section id="cheat-code" className={styles.section}>

                <h2>
                    Here&apos;s my little pro tip to those of you who want to enroll but can&apos;t spend the money on the Basic or Pro Kits.
                </h2>

                <p>
                    This is what I would do if I were in the position of &quot;I want to start selling Seint, but I don&apos;t have the money for the Basic or Pro Kits.&quot; There are 2 options (which honestly could be easily combined!):
                </p>

                <ol>

                    <li>

                        <p>
                            Order the Essentials Kit ($99US/$139CAN). This comes with no makeup tins but is the lowest barrier to entry. 
                        </p>
                        
                        <br />

                        <p>
                            THEN once you&apos;ve enrolled open yourself a party link (yes that&apos;s right you can have your own party link open as an Artist.) launch your Seint business and have your customers order through your party link. Now you&apos;re not only making a commission on your sales, but you&apos;re also racking up store credit! When you can then turn around and use to order the products you want for your artist kit.
                        </p>

                    </li>

                    <li>
                        Purchasing your kit through the <ExternalLink href='https://www.klarna.com/us/pay-in-4/'>Klarna</ExternalLink> app allows you to split the cost in to 4 interest free payments! This allows you to get your kit, and start making money as you&apos;re paying it off! Worry free! (Feel free to reach out if you need help with this option!)
                    </li>

                </ol>

            </section>

            <section id='minimum-sales' className={styles.section}>

                <h2>
                    What is the Minimum Amount I Have to Sell Each Month?
                </h2>

                <p>
                    There are NO SALES MINIMUMS to be an Artist! That&apos;s what makes the Seint Artist Program so unique! However, in order to receive bonuses or downline commissions (if you have a team), there are minimum qualifications to stay active. These are only qualifiers. If you don&apos;t make a single sale in a month no one is ever going to reprimand you and you won&apos;t ever lose your Seint Artist status (unless you choose to leave).
                </p>

            </section>

            <section id="discount" className={styles.section}>

                <h2>
                    Do I get a Discount?
                </h2>

                <p>
                    As an Artist you get a 20% discount! However, you can choose to pay full price and earn up to 40% commission on your OWN purchases! You can even create a &quot;party link&quot; (which I prefer to call rewards links since you don&apos;t actually HAVE to host a party to use the link) and earn store credit while also making a commission on your own sale! How cool is that??
                </p>

                <p>
                    On a personal note: I use a party link all the time and  I use the accumulated rewards and store credit to purchase my own makeup and restock items in my kit, so in my case my party link keeps me from spending money on product! It&apos;s the gift that keeps on giving!
                </p>

            </section>

            <section id="inventory" className={styles.section}>

                <h2>
                    Do I Have to Keep an Inventory?
                </h2>

                <p>
                    No!! Again, another beauty of being a Seint Artist! Seint Headquarters handles all of the product from shipping and fulfillment to returns and exchanges! If a customer ever has an issue their customer service department is beyond amazing! All you have to do is show off a product you already love!!!
                </p>

            </section>

            <section id='commission' className={styles.section}>

                <h2>
                    Okay, Okay. What Commissions Can Artists Make?
                </h2>

                <p>
                    So glad you asked, dear reader! You will always make at least 20% off of any sale you make! That said: You can earn up to 40% commission, and bonuses if you&apos;re building a team (you can even make money from your downline commissions too!). So really, the more you sell the more you make. Simple as that.
                </p>

                <Image src='/artist-commission.png' width={300} height={300} alt='' />

            </section>

            <section id="how-often-do-you-get-paid" className={styles.section}>

                <h2>
                    So, How Often Do Artists Get Paid?
                </h2>

                <p>
                    Artists are paid every Friday (that&apos;s right EVERY Friday) and those payments are based on your  personal sales. Once a month Artists are paid based on their bonuses, the added percentage payments (as seen in the above diagram), and downline commissions (if you choose to build a team).  So really we get paid 5 times a month!!
                </p>

            </section>

            <section id="influencer" className={styles.section}>

                <h2>
                    Tips for Influencers!
                </h2>

                <p>
                    Some of you reading this post are influencers, who let&apos;s face it get a ton of requests from your thousands of followers and don&apos;t necessarily have the time to invest in doing color matches for each potential customer. You have a very unique opportunity within Seint that not a lot of Artists have!!! Hear me out! This could be a really fantastic way to create another stream of income for yourself.
                </p>

                <p>
                    As an influencer (which you probably already know by now) your followers trust you. If you say you love these products they&apos;re going to be itching to try them! Amazing! A plethora of potential customers for you!
                </p>

                <p>
                    Seint created pre-made <ExternalLink href='https://st-sational-corntee.seintofficial.com/en/shop/retail/143/collections'>IIID foundation collections</ExternalLink> (the No.4, No.8, and No.12) that allows customers to find their own general shades! While I always encourage the one on one relationship with your customers -- and also ensuring their match is customized to them. A lot of times people are too shy to send that makeup-free selfie anyway. This is a fantastic way for your potential customers to get started (at a discount too) and skip the color match process. Promoting these pre-made collections is an easy win for everyone involved!!
                </p>

                <h5>
                    BEST OF ALL!!! You do NOT have to be exclusively Seint! You can still promote all the products you usually do! You&apos;re just adding another stream of income to your arsenal!!
                </h5>

            </section>

            <section id="competition" className={styles.section}>

                <h2>
                    Do Artists Compete?
                </h2>

                <p>
                    Not at all! When a customer purchases through you they are your customer for life! Seint makes sure of this to eliminate Artists stealing from one another, but also to ensure that you don&apos;t work hard to get a customer and end up losing them. Plus this allows you to form a really wonderful relationship with your client and keep it that way.
                </p>

                <p>
                    As for saturation in the market? Seint is still a relatively new company having launched it&apos;s artist program in 2017!
                </p>

                <p>
                    <em>
                        As of March 2021 there are 21k artists in total! This makes it basically a ground-floor opportunity by enrolling now!
                    </em>
                </p>

                <p>
                    Since there aren&apos;t a lot of Artists out there chances are the market where you live is relatively untapped! Opening you up to endless possibilities for growth and to make an excellent income!
                </p>

            </section>

            <section id="team" className={styles.section}>

                <h2>
                    Do I HAVE to Build a Team?
                </h2>

                <p>
                    Nope! Seint will never pressure you to build a downline! That&apos;s totally a personal preference. You can make really good money off your own sales commissions by themselves! Building a team offers benefits (like passive-income) that are super attractive though... but are NEVER REQUIRED.
                </p>

            </section>

            <section id='best-way-to-enroll' className={styles.section}>

                <h2>
                    Is It Better to Join Through an Artist or Directly Under Corporate?
                </h2>

                <ExternalLink href='https://st-sational-corntee.seintofficial.com/en/enroll/pick-artist'>
                    <span className={styles.center_text}>
                        Join with an artist!!!!!
                    </span>
                </ExternalLink>

                <p>
                    Enrolling through an artist with a team gives you access to personal one-on-one mentoring and coaching as well as fine-tuned training materials that will set yourself up for success!  Enrolling directly under corporate doesn&apos;t give you access to all of these materials! Plus there&apos;s an amazing support system in an already established team! You&apos;ll never be alone!
                </p>

                <p>
                    Artists that enroll under me not only get access to my mother team&apos;s plethora of knowledge, but I&apos;m here every single step of the way to help guide you to success!
                </p>

                <p>
                    It&apos;s a wonderful support system!
                </p>

                <ExternalLink href='https://st-sational-corntee.seintofficial.com/en/enroll/pick-artist'>
                    <Button>
                        Join My Team
                    </Button>
                </ExternalLink>

            </section>

            <section id='personal-experience' className={styles.section}>

                <h2>
                    Overview of My Experience
                </h2>

                <p>
                    Here&apos;s where I can be a bit biased. If you would have asked me a year ago if I would ever be a Seint Artist I would have laughed at you. I never in a million years saw myself doing this. I cringed at the thought. However, once I started using the products, fell in love with them, and subsequently told literally everyone about them.
                </p>

                <p>
                    <em>
                        It started becoming overwhelmingly evident that it was dumb that I wasn&apos;t getting paid for it.
                    </em>
                </p>

                <p>
                    I&apos;ve been using Seint products for almost a year, I&apos;ve been an Artist for 6 months and it has become such a wonderful creative outlet for me.  As many of you know Seint is not the only thing I do. My main career as an Actress and Voice Artist has me working around the clock. That is my full time job and it&apos;s thriving and I&apos;m more than thankful for that blessing. However, unlike most 9-5 jobs that get a paycheck every 2 weeks... I don&apos;t see my pay until those projects are done. Which sometimes can be a month or longer! Seint has been an incredible way to bridge the gap between those paychecks! Moreover, I can work my Seint business without burning myself out! All things worth anything take some sort of effort, but Seint feels effortless to me. It&apos;s  provided me an excellent income while serving people and it&apos;s so fulfilling!
                </p>

                <p>
                    <em>
                        I love that if I&apos;m too busy I&apos;m never going to get in trouble for not making a sale. And I never have to hold an inventory of product. Thanks to party links I haven&apos;t paid for any makeup to restock my kit!
                    </em>
                </p>

                <h5>
                    It&apos;s a low stakes way to make some money on the side (or even an entire living off of!)
                </h5>

                <p>
                    I know there&apos;s plenty that I could still go over, but this is already a ton of information to take in! So please feel free to <Link href='/contact'>contact</Link> me with any questions should you have any!
                </p>

            </section>

            <section className={styles.section}>

                <h2>
                    Does the Seint Artist Program Sound Like a Good Fit For You?!
                </h2>

                <p>
                    Then having you join my team would be a dream come true! I promise to help you every step of the way! Enrolling with me will give you access to some of the best training materials and resources out there! You cannot fail (unless you don&apos;t try at all!) with me!
                </p>

                <ExternalLink href='https://st-sational-corntee.seintofficial.com/en/enroll/pick-artist'>
                    <Button>
                        Join My Team
                    </Button>
                </ExternalLink>

                <p>
                    <em>
                        If you&apos;re looking to use Klarna to pay for your kit in installments copy and paste the link in the button above into the Klarna app and it will walk you through the rest!
                    </em>
                </p>

                <p>
                    I can&apos;t wait for this to become a fun and low stress way for you to make some income like it has for me!
                </p>

                <Signoff />

            </section>

            <hr />

            <section id="video" className={`${styles.section} ${styles.video}`}>

                <h2>
                    Quick Seint Artist Program Overview Video:
                </h2>

                {/* <YouTubeEmbed url='https://youtube.com/embed/vb1QfLXK-JY' /> */}

            </section>

            <hr />

        </main>
    )
}