import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postDirectory = path.join(process.cwd(), 'src/data/posts')

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postDirectory)

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace('.mdx', '')

    const fullPath = path.join(postDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    const formattedDate = new Date(data.date).toLocaleDateString('en-GB')

    const frontmatter = {
      ...(data as { title: string; excerpt: string }),
      date: formattedDate,
    }

    return {
      slug,
      ...frontmatter,
    }
  })

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory)

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  })
}

export const getPostData = async (slug: string) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`)
  const postContent = fs.readFileSync(fullPath, 'utf8')

  return postContent
}
