import React, { Dispatch } from 'react'
import { Action } from './Reducer'
import styles from '../page.module.css'

export default function NameAndEmail({
    firstName,
    lastName,
    email,
    dispatch
}: {
    firstName: string,
    lastName: string,
    email: string,
    dispatch: Dispatch<Action>
}) {
    return (
        <div className={styles.formDiv}>
            <label htmlFor="firstName">
                <span>First Name</span>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={e => dispatch({ type: 'change-first-name', payload: e.target.value })}
                    value={firstName}
                    required 
                />
            </label>
            
            <label htmlFor="lastName">
                <span>Last Name</span>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={e => dispatch({ type: 'change-last-name', payload: e.target.value })}
                    value={lastName}
                    required 
                />
            </label>
            
            <label htmlFor="email">
                <span>Email</span>
                <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={e => dispatch({ type: 'change-email', payload: e.target.value })}
                    value={email}
                    required 
                />
            </label>
        </div>
    )
}