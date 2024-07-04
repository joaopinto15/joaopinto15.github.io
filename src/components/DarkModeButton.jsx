import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"

// Custom Button from theme-toggles
const DarkModeButton = ({ toggleDarkMode }) => {
    return (
        <Around className='text-4xl text-black dark:text-white' onToggle={toggleDarkMode} duration={650} />
    )

}

export default DarkModeButton