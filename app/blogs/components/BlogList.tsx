'use client'

import { useEffect, useState } from 'react'
import LargeBlogCard from '../../../components/cards/LargeBlogCard'
import BlogCard from '../../../components/cards/BlogCard'
import styles from '../page.module.css'
import { getAllBlogs } from '@/lib/getAllBlogs'

export default function BlogList() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filterTerm, setFilterTerm] = useState('')
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])

    useEffect(() => {
        async function fetchBlogs() {
            const allBlogs = await getAllBlogs()
            setBlogs(allBlogs)
        }

        fetchBlogs()
    }, [])

    useEffect(() => {
        if (!searchTerm) {
            return setFilteredBlogs(blogs)
        }

        const searchTerms = searchTerm.trim().split(' ')

        setFilteredBlogs(blogs.filter(blog => {
            let matchFound = false
            
            searchTerms.forEach(term => {
                if (blog.title.toLowerCase().includes(term.toLowerCase())) matchFound = true
                if (blog.topics.includes(searchTerm.toLowerCase())) matchFound = true
                if (blog.topics.includes(term.toLowerCase())) matchFound = true
            })

            return matchFound
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
        <>
        
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
                        <option value="state-of-mind">State of Mind</option>
                        <option value="tutorial">Tutorials</option>
                        <option value="products">Products</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>

                </div>

            </section>

            <section className={styles.blog_grid}>

                {filteredBlogs.map((blog, idx) => (
                    idx === 0 ?

                    <LargeBlogCard key={blog.id} blog={blog} firstBlog={blogs[0].id === blog.id} /> :

                    <BlogCard key={blog.id} blog={blog} />
                ))}

            </section>

        </>
    )
}