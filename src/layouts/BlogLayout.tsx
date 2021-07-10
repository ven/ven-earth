import { ReactNode } from 'react'
import { GenericMeta } from 'components/GenericMeta'
import FadeIn from 'react-fade-in'

interface Props {
  children: ReactNode
  title: string
  description: string
}

export const BlogLayout = ({ children, title, description }: Props) => {
  return (
    <>
      <GenericMeta title={title} description={description} />

      <FadeIn className="flex flex-col justify-center max-w-3xl mx-auto mb-16 sm:px-0">
        <h1 className="text-5xl font-bold mr-4">{title}</h1>
        {children}
      </FadeIn>
    </>
  )
}
