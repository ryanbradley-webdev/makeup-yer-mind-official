'use client'

import { useReducer, useState } from 'react'
import { reducer, initialState } from '../util/Reducer'
import styles from '../page.module.css'
import FormDiv from './FormDiv'

export default function Form() {
    const [formData, dispatch] = useReducer(reducer, initialState)

    const [formPage, setFormPage] = useState(1)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form action='' onSubmit={handleSubmit} className={styles.form}>

            <FormDiv
                firstPage
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={1}
            >

                <label htmlFor="firstName">
                    <span>First Name</span>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={e => dispatch({ type: 'change-first-name', payload: e.target.value })}
                        value={formData.firstName}
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
                        value={formData.lastName}
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
                        value={formData.email}
                        required 
                    />
                </label>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={2}
            >

                <label htmlFor="referral">
                    <span>Referral</span>
                    <input 
                        type="text" 
                        name="referral" 
                        id="referral"
                        onChange={e => dispatch({ type: 'change-referral', payload: e.target.value })}
                        value={formData.referral}
                    />
                </label>

                <div className={styles.radioDiv}>

                    <p>
                        When you look at the veins on the underside of your wrist (in natural light) are they...
                    </p>

                    <label htmlFor="green">
                        <input 
                            type="radio"
                            name="vein-color"
                            id="green"
                            onChange={e => dispatch({ type: 'change-vein-color', payload: 'green' })}
                        />
                        <span>Green</span>
                    </label>

                    <label htmlFor="blue">
                        <input 
                            type="radio"
                            name="vein-color"
                            id="blue"
                            onChange={e => dispatch({ type: 'change-vein-color', payload: 'blue' })}
                        />
                        <span>Blue</span>
                    </label>

                    <label htmlFor="vein-color">
                        <input 
                            type="radio"
                            name="vein-color"
                            id="both"
                            onChange={e => dispatch({ type: 'change-vein-color', payload: 'both' })}
                        />
                        <span>A perfect combination of green and blue</span>
                    </label>

                </div>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={3}
            >

                <p>
                    What kind of coverage are you looking for in your makeup? What are your skin concerns?
                </p>

                <textarea
                    name="coverage"
                    id="coverage"
                    cols={30}
                    rows={10}
                    onChange={e => dispatch({ type: 'change-coverage', payload: e.target.value })}
                    value={formData.coverage}
                ></textarea>

            </FormDiv>

        </form>
    )
}