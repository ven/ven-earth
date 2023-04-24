import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faGithub, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faCalendarDay,
  faEnvelope,
  faGlobeEurope,
  faSearch,
  faCaretDown as faSolidCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/pro-duotone-svg-icons'
import {
  faCaretDown,
  faCaretRight,
  faClipboard,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSnow,
  faCloudSun,
  faClouds,
  faDotCircle,
  faExternalLink,
  faHomeLgAlt,
  faLightbulb,
  faMoon,
  faSnooze,
  faStars,
  faSunHaze,
  faTachometer,
  faThunderstorm,
} from '@fortawesome/pro-regular-svg-icons'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent Font Awesome from adding its CSS since we did it manually above:
config.autoAddCss = false

// Import @fortawesome/free-brands-svg-icons
library.add(faTwitter, faGithub, faDiscord, faSpotify)

// Import @fortawesome/free-solid-svg-icons
library.add(faEnvelope, faSearch, faCalendarDay, faGlobeEurope, faSolidCaretDown)

// Import @fortawesome/free-regular-svg-icons
library.add(faClock)

// Import @fortawesome/pro-regular-svg-icons
library.add(
  faCloud,
  faClouds,
  faLightbulb,
  faTachometer,
  faMoon,
  faHomeLgAlt,
  faCaretDown,
  faCaretRight,
  faDotCircle,
  faStars,
  faSnooze,
  faCloudSnow,
  faThunderstorm,
  faCloudShowersHeavy,
  faCloudRain,
  faCloudSun,
  faSunHaze,
  faClipboard,
  faExternalLink
)

// Import @fortawesome/pro-duotone-svg-icons
library.add(faSun)
