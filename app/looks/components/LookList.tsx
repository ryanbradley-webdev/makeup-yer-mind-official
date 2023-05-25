'use client'

import { useState } from 'react'
import styles from '../page.module.css'

export default function LookList() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filterTerm, setFilterTerm] = useState('')
    const [filteredLooks, setFilteredLooks] = useState<Look[]>([])

    return (
        <section>
            
        </section>
    )
}