import { ReactNode } from 'react'
import { GenericMeta } from 'components/GenericMeta'
import FadeIn from 'react-fade-in'

interface Props {
  children: ReactNode
  title?: string
  description?: string
  margin?: boolean
}

export const MainLayout = ({ children, title, description, margin = true }: Props) => {
  return (
    <>
      {title && description && <GenericMeta title={title} description={description} />}

      <FadeIn className="flex flex-col max-w-3xl mx-auto mb-16 sm:px-0">
        {title && <h1 className="text-5xl font-bold">{title}</h1>}
        {description && <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>}
        <div className={margin ? 'mt-8' : undefined}>{children}</div>
      </FadeIn>
    </>
  )
}
