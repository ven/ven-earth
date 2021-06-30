import Link from 'next/link'
import Image from 'next/image'
import Tweet from 'react-tweet-embed'

const CustomLink = ({ href }: { href: string }) => {
  const internalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (internalLink) {
    return (
      <Link href={href}>
        <a href={href} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} />
}

export const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
}
