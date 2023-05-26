'use client'

import { useEffect, useState } from 'react'
import LargeLookCard from '@/components/cards/LargeLookCard'
import LookCard from '@/components/cards/LookCard'
import styles from '../page.module.css'
import { getAllLooks } from '@/lib/getAllLooks'

export default function LookList() {
    const [looks, setLooks] = useState<Look[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredLooks, setFilteredLooks] = useState<Look[]>(looks || [])

    useEffect(() => {
        if (!searchTerm) {
            return setFilteredLooks(looks)
        }

        const searchTerms = searchTerm.trim().split(' ')

        setFilteredLooks(looks.filter(look => {
            let matchFound = false
            
            searchTerms.forEach(term => {
                if (look.title.toLowerCase().includes(term.toLowerCase())) matchFound = true
            })

            return matchFound
        }))
    }, [searchTerm, looks])

    useEffect(() => {
        async function fetchData() {
            const allLooks = await getAllLooks()
            setLooks(allLooks)
        }

        fetchData()
    }, [])
    
    return (
        <>
        
            <section className={styles.parameters}>

                <div>

                    <label htmlFor="search">
                        Looking for something specific?
                    </label>

                    <input type="text" name='search' id='search' onChange={e => setSearchTerm(e.target.value)} />

                </div>

            </section>

            <section className={styles.look_grid}>

                {filteredLooks.map((look, idx) => (
                    idx === 0 ?

                    <LargeLookCard key={look.id} look={look} /> :

                    <LookCard key={look.id} look={look} />
                ))}

            </section>

        </>
    )
}