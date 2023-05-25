'use client'

import { useEffect, useState } from 'react'
import BlogCard from '../../components/cards/BlogCard'
import styles from './page.module.css'
import LargeBlogCard from '../../components/cards/LargeBlogCard'

import { SAMPLE_BLOGS } from './sampleBlogs'

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

                    <LargeBlogCard key={blog.id} blog={blog} firstBlogId={blogs[0].id} /> :

                    <BlogCard key={blog.id} blog={blog} />
                ))}

            </section>

        </main>
    )
}