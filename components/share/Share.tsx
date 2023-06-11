'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ExternalLink from '../ExternalLink'
import Facebook from '../icons/Facebook'
import LinkIcon from '../icons/LinkIcon'
import LinkedIn from '../icons/LinkedIn'
import Twitter from '../icons/Twitter'
import styles from './share.module.css'

export default function Share() {
    const [facebookHover, setFacebookHover] = useState<boolean>(false)
    const [twitterHover, setTwitterHover] = useState<boolean>(false)
    const [linkedInHover, setLinkedInHover] = useState<boolean>(false)
    const [linkHover, setLinkHover] = useState<boolean>(false)

    const pathname = usePathname()

    const URL = `https://makeupyermind.com${pathname}`
    
    const copyURL = () => {
        navigator.clipboard.writeText(URL)
    }

    return (
        <div className={styles.share_container}>
            
            <ExternalLink 
                href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
                onMouseEnter={() => setFacebookHover(true)}
                onMouseLeave={() => setFacebookHover(false)}
            >
                <Facebook hover={facebookHover} />
            </ExternalLink>

            <ExternalLink
                href={`https://twitter.com/intent/tweet?text=${URL}`}
                onMouseEnter={() => setTwitterHover(true)}
                onMouseLeave={() => setTwitterHover(false)}
            >
                <Twitter hover={twitterHover} />
            </ExternalLink>

            <ExternalLink
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}`}
                onMouseEnter={() => setLinkedInHover(true)}
                onMouseLeave={() => setLinkedInHover(false)}
            >
                <LinkedIn hover={linkedInHover} />
            </ExternalLink>

            <span
                onClick={copyURL}
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
            >
                <LinkIcon hover={linkHover} />
            </span>

        </div>
    )
}