import { BlogLayout } from '../../layouts/BlogLayout'
import Image from 'next/image'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import { MDXComponents } from '../../components/MDXComponents'
import renderToString from 'next-mdx-remote/render-to-string'
import readingTime from 'reading-time'
import rehypePrism from '@mapbox/rehype-prism'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents })

  return (
    <BlogLayout title={frontMatter.title} description={frontMatter.excerpt}>
      <div className="mt-6 flex flex-row items-center">
        <Image
          className="rounded-full"
          src="/ven.jpg"
          alt="ven profile picture"
          width={24}
          height={24}
        />
        <p className="ml-2">
          <a
            className="focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
            href="https://twitter.com/venolol"
            rel="noopener noreferrer"
            target="_blank"
          >
            {frontMatter.author}
          </a>{' '}
          • published on {frontMatter.date} • {frontMatter.readingTime.text}
        </p>
      </div>
      <article className="max-w-none w-full mt-8 prose prose-lg dark:prose-dark">{content}</article>
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postContent = await getPostData(params.slug)
  const { data, content } = matter(postContent)
  const mdxSource = await renderToString(content, {
    scope: data,
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [rehypePrism],
    },
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: { readingTime: readingTime(content), ...data },
    },
  }
}
