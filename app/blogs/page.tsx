'use client'

import { useEffect, useState } from 'react'
import BlogCard from '../../components/cards/BlogCard'
import styles from './page.module.css'
import LargeBlogCard from '../../components/cards/LargeBlogCard'

const SAMPLE_BLOGS: Blog[] = [
    {
        id: '0',
        title: 'Find Your Skin Type',
        slug: 'find-your-skin-type',
        description: 'Take this short quiz to find your skin type!',
        image: 'new-placeholder-lg.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'products'
    },
    {
        id: '1',
        title: 'Ride or Die Beauty Products',
        slug: 'ride-or-die-beauty-products',
        description: 'These are my go-to products that I use on a daily basis.',
        image: 'blog-placeholder-1.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'products'
    },
    {
        id: '2',
        title: 'Basics of Eyeshadow',
        slug: 'basics-of-eyeshadow',
        description: 'Need some tips to level up your eyeshadow game?',
        image: 'blog-placeholder-2.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'tutorial'
    },
    {
        id: '3',
        title: 'Clean and Compact',
        slug: 'clean-and-compact',
        description: 'Channel your inner thrift-queen with these techniques!',
        image: 'blog-placeholder-3.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'lifestyle'
    },
    {
        id: '4',
        title: 'Basics of Contouring',
        slug: 'basics-of-contouring',
        description: 'A quick video showcasing my contouring techniques!',
        image: 'blog-placeholder-4.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'tutorial'
    },
    {
        id: '5',
        title: 'Wing it. Eyeliner, life, everything...',
        slug: 'wing-it-eyeliner-life-everything',
        description: 'Three easy ways to nail that wing.',
        image: 'blog-placeholder-5.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'lifestyle'
    },
    {
        id: '6',
        title: 'St.Sational',
        slug: 'st-sational',
        description: 'My honest review of Seint products.',
        image: 'blog-placeholder-6.png',
        topics: [],
        createdAt: 0,
        updatedAt: 0,
        content: '',
        type: 'products'
    },
]

export default function Blogs() {
    const blogs: Blog[] = SAMPLE_BLOGS
    
    const [searchTerm, setSearchTerm] = useState('')
    const [filterTerm, setFilterTerm] = useState('')
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs || [])

    useEffect(() => {
        if (!searchTerm) {
            return setFilteredBlogs(blogs)
        }

        setFilteredBlogs(blogs.filter(blog => {
            return blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        }))
    }, [searchTerm, blogs])

    useEffect(() => {
        if (!filterTerm || filterTerm === 'none') {
            return setFilteredBlogs(blogs)
        }

        setFilteredBlogs(blogs.filter(blog => {
            return blog.type.toLowerCase() === filterTerm.toLowerCase()
        }))
    }, [filterTerm, blogs])

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

                    <input type="text" name='search' id='search' onChange={e => setSearchTerm(e.target.value)} />

                </div>

                <div>

                    <label htmlFor="filter">
                        Filter by type
                    </label>

                    <select name="filter" id="filter" onChange={e => setFilterTerm(e.target.value)}>
                        <option value="none">No Filter</option>
                        <option value="tutorial">Tutorials</option>
                        <option value="products">Products</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>

                </div>

            </section>

            <section className={styles.blog_grid}>

                {filteredBlogs.map((blog, idx) => (
                    idx === 0 ?

                    <LargeBlogCard key={blog.id} blog={blog} /> :

                    <BlogCard key={blog.id} blog={blog} />
                ))}

            </section>

        </main>
    )
}