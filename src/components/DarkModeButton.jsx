import React from 'react'
import "@theme-toggles/react/css/Classic.css"
import { Around } from "@theme-toggles/react"

const DarkModeButton = ({ toggleDarkMode }) => {
    return (
        <Around className='text-4xl' onClick={toggleDarkMode} duration={650} />
    )

}

export default DarkModeButton