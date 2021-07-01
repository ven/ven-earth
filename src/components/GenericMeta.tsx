import Head from 'next/head'

interface Props {
  title: string
  description: string
}

export const GenericMeta = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
