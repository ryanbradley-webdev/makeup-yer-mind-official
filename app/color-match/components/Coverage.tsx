import { Dispatch } from 'react'
import { Action } from './Reducer'
import styles from '../page.module.css'

export default function Coverage({
    coverage,
    dispatch
}: {
    coverage: string,
    dispatch: Dispatch<Action>
}) {
    return (
        <div className={styles.formDiv}>
            
            <p>
                What kind of coverage are you looking for in your makeup? What are your skin concerns?
            </p>

            <textarea
                name="coverage"
                id="coverage"
                cols={30}
                rows={10}
                onChange={e => dispatch({ type: 'change-coverage', payload: e.target.value })}
                value={coverage}
            ></textarea>

        </div>
    )
}