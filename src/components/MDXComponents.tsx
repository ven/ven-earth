import Link from 'next/link'
import Image from 'next/image'
import Tweet from 'react-tweet-embed'

interface Props {
  href: string
}

const CustomLink = (props: Props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
}
