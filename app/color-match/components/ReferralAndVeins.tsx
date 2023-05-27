import { Dispatch } from 'react'
import { Action } from './Reducer'
import styles from '../page.module.css'

export default function ReferralAndVeins({
    referral,
    dispatch
}: {
    referral: string,
    dispatch: Dispatch<Action>
}) {
    return (
        <div className={styles.formDiv}>
            
            <label htmlFor="referral">
                <span>Referral</span>
                <input 
                    type="text" 
                    name="referral" 
                    id="referral"
                    onChange={e => dispatch({ type: 'change-referral', payload: e.target.value })}
                    value={referral}
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

        </div>
    )
}