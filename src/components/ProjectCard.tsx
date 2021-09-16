import { Project } from 'data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProjectCard = ({ title, description, href, icon }: Project) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow max-w-2xl"
    >
      <div className="flex items-center justify-center text-4xl w-full sm:w-1/12 mr-6 mb-4 sm:mb-0">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full sm:w-11/12">
        <div className="flex gap-2 items-center">
          <div className="font-bold">{title}</div>
          {href && <FontAwesomeIcon size="sm" icon={['far', 'external-link']} />}
        </div>
        <div className="text-gray-600 dark:text-gray-300">{description}</div>
      </div>
    </a>
  )
}
