'use client'

import { useEffect, useState } from 'react'
import styles from '../page.module.css'

import { SAMPLE_LOOKS } from '../sampleLooks'
import LargeLookCard from '@/components/cards/LargeLookCard'
import LookCard from '@/components/cards/LookCard'

export default function LookList() {
    const looks = SAMPLE_LOOKS

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