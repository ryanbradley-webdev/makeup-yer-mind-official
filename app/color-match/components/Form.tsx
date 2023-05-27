'use client'

import { useReducer } from 'react'
import { reducer, initialState } from './Reducer'
import styles from '../page.module.css'
import NameAndEmail from './NameAndEmail'
import ReferralAndVeins from './ReferralAndVeins'
import Coverage from './Coverage'

export default function Form() {
    const [formData, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form action='' onSubmit={handleSubmit} className={styles.form}>
            
            <NameAndEmail
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                dispatch={dispatch}
            />

            <ReferralAndVeins
                referral={formData.referral}
                dispatch={dispatch}
            />

            <Coverage
                coverage={formData.coverage}
                dispatch={dispatch}
            />

        </form>
    )
}