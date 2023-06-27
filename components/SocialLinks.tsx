'use client'

import { useState } from "react"
import ExternalLink from "./ExternalLink"
import Email from "./icons/Email"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import Pinterest from "./icons/Pinterest"
import YouTube from "./icons/YouTube"
import Shop from "./icons/Shop"

export default function SocialLinks({
    className
}: {
    className: string
}) {
    const [youtubeHover, setYoutubeHover] = useState(false)
    const [instagramHover, setInstagramHover] = useState(false)
    const [pinterestHover, setPinterestHover] = useState(false)
    const [facebookHover, setFacebookHover] = useState(false)
    const [emailHover, setEmailHover] = useState(false)
    const [shopHover, setShopHover] = useState(false)
    
    return (
        <div className={className}>

            <ExternalLink 
                href='https://www.youtube.com/@Makeup.Yer.Mind.'
                onMouseEnter={() => setYoutubeHover(true)}
                onMouseLeave={() => setYoutubeHover(false)}
            >
                <YouTube hover={youtubeHover} />
            </ExternalLink>

            <ExternalLink 
                href='https://www.instagram.com/makeup.yer.mind/'
                onMouseEnter={() => setInstagramHover(true)}
                onMouseLeave={() => setInstagramHover(false)}
            >
                <Instagram hover={instagramHover} />
            </ExternalLink>

            <ExternalLink 
                href='https://www.pinterest.com/MakeupYerMind/'
                onMouseEnter={() => setPinterestHover(true)}
                onMouseLeave={() => setPinterestHover(false)}
            >
                <Pinterest hover={pinterestHover} />
            </ExternalLink>

            <ExternalLink 
                href='https://www.facebook.com/Makeup.Yer.Mind.Official'
                onMouseEnter={() => setFacebookHover(true)}
                onMouseLeave={() => setFacebookHover(false)}
            >
                <Facebook hover={facebookHover} />
            </ExternalLink>

            <ExternalLink
                href='https://my-store-e2f2c8.creator-spring.com/'
                onMouseEnter={() => setShopHover(true)}
                onMouseLeave={() => setShopHover(false)}
            >
                <Shop hover={shopHover} />
            </ExternalLink>

            <a
                href={`mailto:${process.env.NEXT_PUBLIC_TO_EMAIL}`}
                rel='nofollow'
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
            >
                <Email hover={emailHover} />
            </a>

        </div>
    )
}