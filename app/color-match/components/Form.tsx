'use client'

import { useReducer, useState } from 'react'
import { reducer, initialState } from '../util/Reducer'
import styles from '../page.module.css'
import FormDiv from './FormDiv'
import Image from 'next/image'

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
                        placeholder='First Name'
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
                        placeholder='Last Name'
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
                        placeholder='example@email.com'
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
                        placeholder="If you weren't referred, tell me how you found me!"
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
                    placeholder='Tell me all about it here!'
                    value={formData.coverage}
                ></textarea>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={4}
            >

                <p>
                    Okay gorgeous, I just need a makeup free selfie! This is so important for me to accurately match you. I know that sending a makeup-free selfie can be intimidating, please know that I am the only one who will see it and I will delete it as soon as I&apos;m done matching you! Follow the instructions below to submit a perfect selfie!
                </p>

                <Image src='/selfie-how-to.png' width={480} height={540} alt='' />

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={5} // FIXME this value is for testing 'last page' functionality. Change to actual value when more content is added.
                lastPage
            >

                <p>
                    If you&apos;re happy with everything, submit the form and I&apos;ll give you your color match in just a few days!
                </p>

            </FormDiv>

        </form>
    )
}