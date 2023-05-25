interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

export default function ExternalLink({
    href,
    children,
    ...props
}: ExternalLinkProps) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer" 
            {...props}
        >
            {children}
        </a>
    )
}