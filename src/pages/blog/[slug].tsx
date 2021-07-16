import { BlogLayout } from 'layouts/BlogLayout'
import { getAllPostSlugs, getPostData } from 'lib/posts'
import { MDXComponents } from 'components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
//@ts-ignore
import rehypePrism from '@mapbox/rehype-prism'
import matter from 'gray-matter'
import Image from 'next/image'
import VenImage from '@public/img/ven.jpg'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function Posts({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogLayout title={frontMatter.title} description={frontMatter.excerpt}>
      <div className="mt-6 flex flex-row items-center">
        <Image
          className="rounded-full"
          src={VenImage}
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
      <article className="max-w-none w-full mt-8 prose prose-lg dark:prose-dark">
        <MDXRemote {...source} components={MDXComponents} />
      </article>
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

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params
  const postContent = await getPostData(params.slug)
  const { data, content } = matter(postContent)
  const mdxSource = await serialize(content, {
    scope: data,
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
