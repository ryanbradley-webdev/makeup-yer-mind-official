interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
    href: string
}

export default function ExternalLink({
    children,
    href,
    ...props
}: ExternalLinkProps) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...props}
        >
            {children}
        </a>
    )
}