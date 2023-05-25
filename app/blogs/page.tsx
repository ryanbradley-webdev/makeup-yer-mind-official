import Image from 'next/image'
import styles from './page.module.css'

export default function Blogs() {
    return (
        <main>

            <h1>
                Learn Something New
            </h1>

            <section className={styles.parameters}>

                <div>

                    <label htmlFor="search">
                        Looking for something specific?
                    </label>

                    <input type="text" name='search' id='search' />

                </div>

                <div>

                    <label htmlFor="filter">
                        Filter by type
                    </label>

                    <select name="filter" id="filter">
                        <option value="none">No Filter</option>
                        <option value="tutorial">Tutorials</option>
                        <option value="products">Products</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>

                </div>

            </section>

            <section className={styles.blog_grid}>

                <div className={styles.first_blog}>

                    <Image src='/new-placeholder-lg.png' width={448} height={337} alt='' />

                    <div className={styles.card_info}>

                        <p className={styles.latest}>
                            Latest Blog
                        </p>

                        <h5>
                            Find Your Skin Type
                        </h5>

                        <h6>
                            Take this short quiz to find your skin type!
                        </h6>

                    </div>

                </div>

                <div className={styles.blog}>

                    <Image src='/blog-placeholder-1.png' width={325} height={194} alt='' />

                    <h5>
                        Ride or Die Beauty Products
                    </h5>

                    <h6>
                        These are my go-to products that I use on a daily basis.
                    </h6>

                </div>

                <div className={styles.blog}>

                    <Image src='/blog-placeholder-2.png' width={325} height={194} alt='' />

                    <h5>
                        Basics of Eyeshadow
                    </h5>

                    <h6>
                        Need some tips to level up your eyeshadow game?
                    </h6>

                </div>

                <div className={styles.blog}>

                    <Image src='/blog-placeholder-3.png' width={325} height={194} alt='' />

                    <h5>
                        Clean and Compact
                    </h5>

                    <h6>
                        Channel your inner thrift-queen with these techniques!
                    </h6>

                </div>

                <div className={styles.blog}>

                    <Image src='/blog-placeholder-4.png' width={325} height={194} alt='' />

                    <h5>
                        Basics of Contouring
                    </h5>

                    <h6>
                        A quick video showcasing my contouring techniques!
                    </h6>

                </div>

                <div className={styles.blog}>

                    <Image src='/blog-placeholder-5.png' width={325} height={194} alt='' />

                    <h5>
                        Wing it. Eyeliner, life, everything...
                    </h5>

                    <h6>
                        Three easy ways to nail that wing.
                    </h6>

                </div>

                <div className={styles.blog}>

                    <Image src='/blog-placeholder-6.png' width={325} height={194} alt='' />

                    <h5>
                        St.Sational
                    </h5>

                    <h6>
                        My honest review of Seint products.
                    </h6>

                </div>

            </section>

        </main>
    )
}