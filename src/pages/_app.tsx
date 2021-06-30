import "../styles/globals.css";
import { Navbar } from "../components/Nav/Navbar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faDiscord,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCalendarDay,
  faGlobeEurope,
  faCaretDown as faSolidCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
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
  faClipboard,
} from "@fortawesome/pro-regular-svg-icons";
import { faSun } from "@fortawesome/pro-duotone-svg-icons";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

library.add(
  faTwitter,
  faGithub,
  faDiscord,
  faSpotify,
  faEnvelope,
  faCalendarDay,
  faGlobeEurope,
  faSolidCaretDown,
  faClock,
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
  faClipboard,
  faSun
);

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex flex-col min-h-screen">
        {router.pathname !== "/planet" && <Navbar />}
        <Toaster position="bottom-left" />
        <div
          className={`h-full lg:px-0 ${
            router.pathname !== "/planet" && "px-10"
          }`}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
