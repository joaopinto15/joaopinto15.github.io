import "@theme-toggles/react/css/Around.css"
import { Around, Within, Simple } from "@theme-toggles/react"

// Classic , Lightbulb, Around, Within, Simple
const DarkModeButton = ({ toggleDarkMode }) => {
    return (
        <Around className='text-4xl' onToggle={toggleDarkMode} duration={650} />
    )

}

export default DarkModeButton