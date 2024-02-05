import React from "react"

import { AnimatePresence } from "framer-motion"

// necessary workaround for animating routes
function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>
}

export default LocationProvider
