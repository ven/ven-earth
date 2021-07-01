import Link from 'next/link'

interface Props {
  slug: string
  date: string
  title: string
  excerpt: string
}

export const BlogCard = ({ slug, date, title, excerpt }: Props) => {
  return (
    <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
      <a className="inline-block w-full">
        <h1 className="text-3xl max-w-lg font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl">{excerpt}</p>
      </a>
    </Link>
  )
}
